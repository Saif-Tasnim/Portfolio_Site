import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationReact = ({setTextColor}) => {
    return (
        <TypeAnimation
            sequence={[
                '👨‍🎓 CSE Graduate 🎓',
                1000,
                () => setTextColor('#8A2BE2'),  //Deep Purple
                '🚀 Full Stack Developer',
                1000,
                () => setTextColor('#00FFC2'), // Mint Green
                '🎨 Frontend Maestro',
                1000,
                () => setTextColor('#FF00FF'),  // Electric Pink 
                '💻 MERN Stack Enthusiast',
                1000,
                () => setTextColor('#40E0D0'),   // Turquoise
                '',
            ]}
            repeat={Infinity}
        />

    );
};

export default TypeAnimationReact;