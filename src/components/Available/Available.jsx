import PropTypes from "prop-types";

const Available = ({ players,handleAddPlayer ,handleReduceMoney}) => {
  return (
    <div className="">
      <h1>Players: {players.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {players.map((players) => (
          <div key={players.playerId}>
            <div className="card bg-base-100 border-2 border-slate-400">
              <figure className="p-10">
                <img
                  className="h-72 w-full rounded-xl"
                  src={players.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                {/* NAME */}
                <div className="flex gap-3 items-center">
                    <i className="fa-solid fa-user text-2xl"></i>
                    <h3 className="text-2xl font-medium">{players.name}</h3>
                </div>
                {/* Nationality */}
                <div className="flex justify-between mb-3">
                    <div className="flex gap-3 items-center text-slate-400">
                        <i className="fa-solid fa-flag "></i>
                        <p>{players.country}</p>
                    </div>
                    <div className="border-2 p-3 rounded-xl bg-slate-300">
                        <h3>{players.role}</h3>
                    </div>
                </div>
                <hr />
                {/* Rating */}
                <div className="flex flex-col gap-y-3 mb-3">
                    <h3 className="font-medium">Rating</h3>
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium">{players.battingStyle}</h3>
                        <h3 className="text-gray-500 font-medium">{players.bowlingStyle}</h3>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium">Price: ${players.biddingPrice}</h3>
                        <button onClick={()=>{handleAddPlayer(players),handleReduceMoney(players.biddingPrice)}} className="btn">Choose Player</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;

Available.propTypes = {
  players: PropTypes.array.isRequired,
  handleAddPlayer: PropTypes.func.isRequired,
  handleReduceMoney:PropTypes.func.isRequired
};
