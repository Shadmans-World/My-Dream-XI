import PropTypes from 'prop-types'

const Selected = ({selectPlayer}) => {
    return (
        <div className="">
            <h1 className="text-6xl font-bold">Selected:{selectPlayer.length}</h1>
            {
                selectPlayer.map((player)=><p key={player.player_id}>{player.name}</p>)
            }
        </div>
    );
};

export default Selected;

Selected.propTypes ={
    selectPlayer: PropTypes.array.isRequired
}