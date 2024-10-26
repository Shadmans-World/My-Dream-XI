import './Footer.css'
import Footerphoto from '../../assets/image/logo-footer.png'
const Footer = () => {
    return (
    <div className="h-max w-full bg-slate-950 relative mt-56">
    {/* Container with background blur effect */}
    <div className="bg-container h-80  p-3 max-w-[auto] md:w-[576px] lg:w-[85%] mx-auto rounded-xl absolute -top-[180px] left-1/2 transform -translate-x-1/2 overflow-hidden flex items-center justify-center border">
        
        {/* Background blur layer */}
        <div className="absolute inset-0 bg-blur "></div>

        {/* Content that stays sharp */}
        <div className="relative z-10 flex flex-col gap-y-4 items-center text-center">
            <h1 className='text-2xl'>Subscribe to our Newsletter</h1>
            <p className='text-gray-400'>Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-3">
                <input className='p-3 border-2 border-black rounded-xl' type="text" placeholder="Enter Your Email" />
                <button className="btn bg-gradient-to-r from-pink-500  to-orange-600">Subscribe</button>
            </div>
        </div>
    </div>

    {/* Rest footer */}
    <div className='pt-44 text-white pb-20'>
        <div className=" flex flex-col gap-y-8 w-[85%] mx-auto mb-10">
            <div className='flex justify-center'>
                <img src={Footerphoto} alt="" />
            </div>
            {/* Below the logo */}
            <div className='flex justify-between gap-3'>
                {/* Left */}
                <div className='flex flex-col gap-y-4'>
                    <h3 className='text-gray-300'>About Us</h3>
                    <p className='text-gray-400'>We are a passionate team dedicated to providing <br /> the best services to our customers.</p>
                </div>
                {/* Middle */}
                <div className='flex flex-col gap-y-4'>
                    <h3 className='text-gray-300'>Quick Links</h3>
                    <ul className='list-disc ml-5 text-gray-400'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#">Content</a></li>
                    </ul>
                </div>
                {/* Right */}
                <div className='flex flex-col gap-y-4'>
                    <h1 className='text-gray-300'>Subscribe</h1>
                    <p className='text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex ">
                        <input className='p-3 border-2 rounded-l-xl' type="text" placeholder="Enter Your Email" />
                        <button className="p-3 rounded-r-xl bg-gradient-to-r from-pink-500  to-orange-600">Subscribe</button>
                </div>
                </div>
            </div>
        </div>
        <div className='w-full h-full border-2 border-gray-700'></div>
        <p className="text-center text-gray-400 text-sm hover:text-gray-300 transition duration-300 mt-10">
        &copy; 2024 MY-DREAM-XI. All Rights Reserved.
    </p>

    </div>
    
</div>



    
    );
};

export default Footer;