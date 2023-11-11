import Hamburger from 'hamburger-react';
import React from 'react';

const MobileNav = ({ open, setOpen }) => {
    console.log(open);
    return (
        <div>
            <Hamburger toggled={open} toggle={setOpen} />
            
            <div className='absolute right-0 w-full pb-5 pt-2'>
                <ul className={`bg-[#242424] flex flex-col items-center gap-2 ${open ? "translate-x-0 duration-700 ": "-translate-x-[1000px] duration-1000"}`}>
                    
                    <li className='border-b-4 border-[#242424]'> <a href="/"> Home </a> </li>
                    
                    <li className='border-b-4 border-[#242424]'> <a href="about"> About </a> </li>
                   
                    <li className='border-b-4 border-[#242424]'> <a href="about"> Experience </a>  
                    </li>
                    
                    <li className='border-b-4 border-[#242424]'><a href="about"> Skills </a></li>
                    
                    <li className='border-b-4 border-[#242424]'><a href="about"> Education </a></li>
                    
                    <li className='border-b-4 border-[#242424]'><a href="about"> Projects </a></li>
                    
                    <li className='border-b-4 border-[#242424]'> <a href="about"> Testimonial </a>
                     </li>
                    
                    <li className='border-b-4 border-[#242424]'> <a href="about"> Contact </a> </li>
                </ul>
            </div>

        </div>
    );
};

export default MobileNav;