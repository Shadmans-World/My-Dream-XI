import Logo from '../../assets/image/logo.png'
import Coin from '../../assets/image/coin.png'
import PropTypes from 'prop-types';

const Navbar = ({money}) => {
    return (
        <nav className='flex flex-col md:flex-row md:justify-between justify-center items-center mb-10 mt-5 gap-y-4 md:gap-y-0'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex flex-col md:flex-row gap-10 items-center  font-normal text-gray-600'>
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Fixture</p>
                <p className="cursor-pointer">Teams</p>
                <p className="cursor-pointer">Schedules</p>

                <button className='p-3 border-2 border-gray-400 flex items-center gap-2 font-bold  rounded-xl'>{money} Coin
                <img className='h-5' src={Coin} alt="" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

Navbar.propTypes ={
    money : PropTypes.number.isRequired
}