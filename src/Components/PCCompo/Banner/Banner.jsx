import React, { useState } from 'react';
import animationImg from '../../../assets/Banner/Animation - 1699716817686.gif';
import img from '../../../assets/Banner/saif_copy.jpg';
import { TypeAnimation } from 'react-type-animation';
import TypeAnimationReact from '../../../Animation/TypeAnimationReact';

const Banner = () => {
    const [textColor, setTextColor] = useState("#8A2BE2")
    return (
        <section className='pt-24 pb-8 lg:py-48 flex flex-col justify-center gap-20 lg:flex-row lg:justify-evenly h-screen'>

            {/* intro  */}
            <div className='w-full lg:w-1/2 pt-20 lg:pt-0 lg:pb-0 lg:ml-10 lg:mr-20'>
                <p className='flex gap-3 items-center justify-center pl-10 lg:pl-0'> <span className='text-3xl font-bold'>Welcome</span>  <img src={animationImg} className='w-14' alt="" /> </p>

                <p className='flex flex-col gap-2 lg:flex-row lg:justify-center items-center lg:gap-5 text-lg py-2'>Greetings from
                    <span className='font-bold text-2xl'> Saif Tasnim Chowdhury </span> </p>

                <p className='text-lg text-center pt-4 lg:pt-3 font-light'>Passionate about Crafting Digital Experiences. </p>

                {/* type animation */}
                <p
                    className='pt-12 font-bold hidden pl-8 text-2xl lg:flex flex-col items-center gap-5'
                > <span> Specializing in </span>

                    <span style={{ color: textColor }}
                    className='text-3xl'
                    >
                        <TypeAnimationReact
                            setTextColor={setTextColor}
                        ></TypeAnimationReact>
                    </span>

                </p>

            </div>

            {/* image section */}
            <div className="w-auto rounded-full border-2 border-purple-500 text-center mx-10 lg:mx-0 lg:mr-20 mb-12">
                <img src={img}
                    className='w-full h-full rounded-full'
                    alt="" />
            </div>

        </section>
    );
};

export default Banner;