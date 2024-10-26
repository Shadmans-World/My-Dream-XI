import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import PropTypes from 'prop-types';
import { useState } from 'react';

const PlayerList = ({ players, handleAddPlayer, selectPlayer, handleRemovePlayer }) => {
  const [activeTab, setActiveTab] = useState("available"); // 'available' or 'selected'

  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-0 right-[-157px] transform -translate-x-1/2 flex text-2xl">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "available" ? "bg-yellow-300 text-black" : "bg-gray-200 text-gray-600"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab("selected")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "selected" ? "bg-yellow-300 text-black" : "bg-gray-200 text-gray-600"
            }`}
          >
            Selected ({selectPlayer.length})
          </button>
        </div>

        {/* Conditionally render based on the activeTab */}
        {activeTab === "available" ? (
          <Available
            players={players}
            handleAddPlayer={handleAddPlayer}
           
          />
        ) : (
          <Selected selectPlayer={selectPlayer} handleRemovePlayer={handleRemovePlayer} setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
};

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  handleAddPlayer: PropTypes.func.isRequired,
  selectPlayer: PropTypes.array.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired,
};
