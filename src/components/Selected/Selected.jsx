import PropTypes from 'prop-types'

const Selected = ({selectPlayer, handleRemovePlayer,setActiveTab}) => {
    return (
        <div className="mt-10 mb-10">
            <h1 className="mb-20 text-2xl md:text-3xl font-medium">Selected:{selectPlayer.length}/6</h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
            {
                selectPlayer.map((player)=><div className='flex justify-between items-center border-2 border-gray-400 px-5 py-5 rounded-xl' key={player.player_id}>
                    <div className='flex gap-5 items-center'>
                    <div>
                        <img className='h-28  w-24 object-cover rounded-xl border-2' src={player.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1 className='text-3xl font-bold'>{player.name}</h1>
                        <p className='text-gray-400'>{player.battingStyle}</p>
                        <p className='text-gray-400'>Price: ${player.biddingPrice}</p>
                    </div>
                    </div>
                    <div>
                        <button onClick={()=>handleRemovePlayer(player.playerId)}>
                        <i className="fa-solid fa-trash-can text-2xl"></i>
                        </button>
                    </div>
                    
                </div>)
            }
            </div>
            <div className='p-2 border-2 border-gray w-max rounded-xl mt-5'>
                 <button className='p-3  bg-yellow-400 rounded-xl' onClick={() => setActiveTab("available")} >Add More Player</button>
            </div>
            
            
        </div>
    );
};

export default Selected;

Selected.propTypes ={
    selectPlayer: PropTypes.array.isRequired,
    handleRemovePlayer:PropTypes.func.isRequired,
    setActiveTab:PropTypes.string.isRequired
}