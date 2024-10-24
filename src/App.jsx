import { useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import PlayerList from "./components/Player-List/PlayerList";
import { useEffect } from "react";


const App = () => {

  const [players, setPlayers] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([])

  useEffect(()=>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  const handleAddPlayer = (player) => {
    const isExist = selectPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId);
    if (!isExist && selectPlayer.length<6) {
      const newSelectPlayer = [...selectPlayer, player];
      setSelectPlayer(newSelectPlayer);
    } else {
      alert('Player is already Exist');
    }
  };
  
  
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>

      {/* Players */}
      <PlayerList players={players} selectPlayer={selectPlayer} handleAddPlayer={handleAddPlayer}></PlayerList>
          {/* Available */}
          {/* Selected */}
      
      {/* Newsletter */}
      {/* Footer */}
    </div>
  );
};

export default App;