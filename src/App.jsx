import { useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import PlayerList from "./components/Player-List/PlayerList";
import { useEffect } from "react";


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

  

  // const handleAddPlayer = (player) => {
  //   const isExist = selectPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId);
  //   if (!isExist && selectPlayer.length<6) {
  //     const newSelectPlayer = [...selectPlayer, player];
  //     setSelectPlayer(newSelectPlayer);
  //   } else {
  //     alert('Player is already Exist');
  //   }
  // };

  const handleAddPlayer = (player) => {
    const isExist = selectPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId);

    if (isExist) {
        alert('Player is already Exist');
    } else if (selectPlayer.length >= 6) {
        alert('Your booking criteria is full');
    } else {
        // Check if enough balance is available to select the player
        if (money >= player.biddingPrice) {
            handleReduceMoney(player.biddingPrice); // Deduct money
            const newSelectPlayer = [...selectPlayer, player];
            setSelectPlayer(newSelectPlayer);
        } 
    }
};


  const handleAddMoney = () =>{
    const claimMoney = 6000000;
    setMoney(claimMoney+ money);
    
  }
  console.log(`money after claim ${money}`)
  
  const handleReduceMoney = (biddingPrice) =>{
    if(money >= biddingPrice && money > 0){
      let newMoney = money - biddingPrice
      setMoney(newMoney)
    }
    else{

      alert('Money is shortage to sign a player')
    }
  }
  console.log(`Money after reduced ${money}`)

  
  
  return (
    <div className="max-w-[1440px] mx-auto p-5">
      {/* Navbar */}
      <Navbar money={money}></Navbar>
      {/* Banner */}
      <Banner handleAddMoney={handleAddMoney}></Banner>

      {/* Players */}
      <PlayerList players={players} selectPlayer={selectPlayer} handleAddPlayer={handleAddPlayer} handleReduceMoney={handleReduceMoney}></PlayerList>
          {/* Available */}
          {/* Selected */}
      
      {/* Newsletter */}
      {/* Footer */}
    </div>
  );
};

export default App;