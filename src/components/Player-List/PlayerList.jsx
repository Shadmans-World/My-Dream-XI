import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import PropTypes from 'prop-types'


const PlayerList = ({players,handleAddPlayer,selectPlayer}) => {

    return (
        <div>
            <div>
                <div className="flex items-center">
                <h1>Available Players</h1>
                <div className="flex mx-auto border-2 border-amber-500 rounded-xl">
                
                    <button className="p-5  border-2 rounded-l-xl border-amber-500 bg-amber-500">Available</button>
                    <button className="p-5 bg-amber-500 border-2 border-amber-500 rounded-r-xl">Selected Players: {selectPlayer.length}</button>
                

                 </div>
                </div>
                
                
            </div>
            <Available players={players}  handleAddPlayer={handleAddPlayer}></Available>
            <Selected selectPlayer={selectPlayer} ></Selected>
        </div>
    );
};

export default PlayerList;

PlayerList.propTypes ={
    players:PropTypes.array.isRequired,
    handleAddPlayer:PropTypes.func.isRequired,
    selectPlayer:PropTypes.array.isRequired
}

