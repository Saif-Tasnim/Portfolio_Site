import React, { useState } from 'react';
import MobileNav from '../../MobileCompo/MobileNav/MobileNav';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (

        <section className='px-5 fixed top-0 bg-[#1b2022] w-full py-2 lg:py-6 flex justify-between items-center'>

            <div>
                <h1 className={`uppercase font-bold tracking-widest lg:mx-24 ${open? "-translate-y-20 transition-all duration-700" : "block transition-all duration-700"}`} >
                    <a href='/'> saif tasnim chy </a>
                </h1>
            </div>

            <div className='mr-7 hidden lg:block'>
                <ul className='flex items-center gap-7'>
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'> <a href="/"> Home </a> </li>
                    
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'> <a href="about"> About </a> </li>
                    
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'> <a href="about"> Experience </a>  </li>
                    
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'><a href="about"> Skills </a></li>
                   
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'><a href="about"> Education </a></li>
                    
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'><a href="about"> Projects </a></li>
                    
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'> <a href="about"> Testimonial </a> </li>
                   
                    <li className='border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700'> <a href="about"> Contact </a> </li>
                </ul>
            </div>

            {/* mobile nav  */}
            <div className='lg:hidden'>
                <MobileNav open={open} setOpen={setOpen}></MobileNav>
            </div>

        </section>
    );
};

export default Header;