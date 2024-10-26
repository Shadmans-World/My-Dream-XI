import PropTypes from 'prop-types';
import Cricket from '../../assets/image/banner-main.png'

const Banner = ({handleAddMoney}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-7 border-2 border-black p-10 md:p-20 rounded-xl bg-gradient-to-bl from-[#0f0f0f] via-[#080417] to-[#7e604f] text-white mb-10">
  
       
        <div className="relative z-10 flex flex-col items-center text-center my-16 gap-y-9">
          
          
          <img src={Cricket} alt="Cricket Logo" className="w-24 h-24 md:w-52 md:h-52" />
          
         
          <h1 className="text-2xl md:text-4xl font-normal tracking-wide">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          
          
              <p className="mt-2 text-gray-400 text-lg md:text-xl font-medium">
              Beyond Boundaries Beyond Limits
              </p>
          
          {/* Button */}
          <span className='p-1 border-2 rounded-xl border-amber-500'>
          <button onClick={handleAddMoney} className=" px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition duration-300">
            Claim Free Credit
          </button>
          </span>
            
        </div>
      </div>
      

      
      
    );
};

export default Banner;

Banner.propTypes ={
  handleAddMoney: PropTypes.func.isRequired
}