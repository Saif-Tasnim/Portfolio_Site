import React from 'react';
import img from '../../../assets/Banner/saif_copy.jpg';

const About = () => {
    return (
        <section name='about' className='my-28 mt-96 pt-80 f h-screen'>
            
            <h1 className='text-center mt-8 mb-12 text-xl font-bold'> About Me </h1>
            <div className='flex justify-center items-center gap-20' >
                {/* left part */}
                <div className='hidden lg:block w-80 rounded-xl border-2'>
                    <img src={img} className='w-full rounded-xl' alt="" />
                </div>

                {/* right part */}
                <div className='w-[89%] mx-auto text-center  lg:w-1/3 lg:mx-0 border-black border-2 p-3 rounded-xl'>
                    <p>
                        Saif Tasnim Chowdhury is a dedicated Full Stack Developer. Specializing in system design and web development, I bring a passion for solving real-life problems through technology. Grounded in the philosophy of keeping my feet on the ground, I aspire to be a pioneering force in the IT field. My unique selling point lies in my unwavering dedication to crafting seamless and impactful solutions. Looking ahead, my goal is not just to develop systems but to continually evolve and lead innovations in the ever-dynamic realm of IT.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;