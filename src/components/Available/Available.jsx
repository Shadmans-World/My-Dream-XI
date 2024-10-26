
import PropTypes from "prop-types";

const Available = ({ players, handleAddPlayer }) => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="mt-1 mb-20 text-2xl md:text-3xl font-medium">Available Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {players.map((player) => (
          <div key={player.playerId} className="h-full">
            <div className="card bg-base-100 border-2 border-slate-400 h-full flex flex-col">
              <figure className="p-10">
                <img
                  className="h-72 w-full rounded-xl border-2"
                  src={player.image}
                  alt="Player"
                />
              </figure>
              <div className="card-body flex flex-col justify-between flex-grow">
                {/* NAME */}
                <div className="flex gap-3 items-center">
                  <i className="fa-solid fa-user text-2xl"></i>
                  <h3 className="text-2xl font-medium">{player.name}</h3>
                </div>
                {/* Nationality */}
                <div className="flex justify-between mb-3">
                  <div className="flex gap-3 items-center text-slate-400">
                    <i className="fa-solid fa-flag"></i>
                    <p>{player.country}</p>
                  </div>
                  <div className="border-2 p-3 rounded-xl bg-slate-300">
                    <h3>{player.role}</h3>
                  </div>
                </div>
                <hr />
                {/* Rating */}
                <div className="flex flex-col gap-y-3 mb-3">
                  <h3 className="font-medium">Rating</h3>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{player.battingStyle}</h3>
                    <h3 className="text-gray-500 font-medium">{player.bowlingStyle}</h3>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Price: ${player.biddingPrice}</h3>
                    <button onClick={() => handleAddPlayer(player, player.biddingPrice)} className="btn">
                      Choose Player
                    </button>
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
};
