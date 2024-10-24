import Logo from '../../assets/image/logo.png'
import Coin from '../../assets/image/coin.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between mb-10 mt-5'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-10 items-center  font-normal text-gray-600'>
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Fixture</p>
                <p className="cursor-pointer">Teams</p>
                <p className="cursor-pointer">Schedules</p>

                <button className='p-3 border-2 border-gray-400 flex items-center gap-2 font-bold  rounded-xl'>0 Coin
                <img className='h-5' src={Coin} alt="" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;