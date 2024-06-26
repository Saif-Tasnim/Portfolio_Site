import Hamburger from 'hamburger-react';
import React from 'react';

const MobileNav = ({ open, setOpen }) => {
   
    return (
        <div>
            <Hamburger toggled={open} toggle={setOpen} />
            
            <div className='absolute right-0 w-full pb-5 pt-2 z-[999999]'>
                <ul className={`bg-[#1b2022] flex flex-col items-center gap-2 ${open ? "translate-x-0 duration-700": "-translate-x-[1000px] duration-1000"}`}>
                    
                    <li className='border-b-4 border-[#242424]'> <a href="/"> Home </a> </li>
                    
                    <li className='border-b-4 border-[#242424]'> <a href="about"> About </a> </li>
                   
                    <li className='border-b-4 border-[#242424]'> <a href="experience"> Experience </a>  
                    </li>
                    
                    <li className='border-b-4 border-[#242424]'><a href="skills"> Skills </a></li>
                    
                    <li className='border-b-4 border-[#242424]'><a href="educations"> Education </a></li>
                    
                    <li className='border-b-4 border-[#242424]'><a href="projects"> Projects </a></li>
                    
                    {/* <li className='border-b-4 border-[#242424]'> <a href="about"> Testimonial </a>
                     </li> */}
                    
                    <li className='border-b-4 border-[#242424]'> <a href="contact"> Contact </a> </li>
                </ul>
            </div>

        </div>
    );
};

export default MobileNav;