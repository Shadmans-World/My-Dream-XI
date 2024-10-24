import { useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import PlayerList from "./components/Player-List/PlayerList";
import { useEffect } from "react";


const App = () => {

  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>

      {/* Players */}
      <PlayerList players={players}></PlayerList>
          {/* Available */}
          {/* Selected */}
      
      {/* Newsletter */}
      {/* Footer */}
    </div>
  );
};

export default App;