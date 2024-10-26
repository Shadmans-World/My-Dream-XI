import { useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import PlayerList from "./components/Player-List/PlayerList";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  // PLayer JSON data
  const [players, setPlayers] = useState([]);
  // Select Player
  const [selectPlayer, setSelectPlayer] = useState([]);
  // Set Money
  const [money, setMoney]=useState(0);


  useEffect(()=>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  const handleRemovePlayer = (playerId) => {
    // Remove the player from the selected players array
    const newSelectPlayer = selectPlayer.filter((player) => player.playerId !== playerId);
    setSelectPlayer(newSelectPlayer); 
    toast.success(`Removed a player from the team successfully`)
};



  const handleAddPlayer = (player) => {
    // Check if player already exists
    const isExist = selectPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId);

    if (isExist) {
        toast('Player is already Exist');
        return; 
    } 
    
    // Check if booking criteria is full
    if (selectPlayer.length >= 6) {
        toast.warn('Your booking criteria is full');
        return; 
    }
    
    // Check if enough balance is available to select the player
    if (money >= player.biddingPrice ) {
      handleReduceMoney(player.biddingPrice); 
        const newSelectPlayer = [...selectPlayer, player];
        setSelectPlayer(newSelectPlayer);
        toast.success(`You successfully sign this player`)
    } else {
      toast.error('Money is shortage to sign a player');
    }
};



  const handleAddMoney = () =>{
    const claimMoney = 6000000;
    setMoney(claimMoney+ money);
    toast.success(`Claim Money Successfully`)
    
  }
  
  
  const handleReduceMoney = (biddingPrice) =>{
    
    if(money >= biddingPrice && money > 0){
      let newMoney = money - biddingPrice
      setMoney(newMoney)
    }
    else{

      toast.error('Money is shortage to sign a player')
    }
  }
  

  
  
  return (
    
    <div>
      <div className="max-w-[85%] mx-auto p-5">
         {/* Navbar */}
        <Navbar money={money}></Navbar>
        {/* Banner */}
        <Banner handleAddMoney={handleAddMoney}></Banner>

        {/* Players */}
        <PlayerList players={players} selectPlayer={selectPlayer} handleAddPlayer={handleAddPlayer} handleRemovePlayer={handleRemovePlayer}></PlayerList>
            {/* Available */}
            {/* Selected */}

      </div>
     
      
      
      {/* Footer */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;