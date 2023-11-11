import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationReact = ({setTextColor}) => {
    return (
        <TypeAnimation
            sequence={[
                '🔧 Problem Solver',
                800,
                () => setTextColor('#8A2BE2'),  //Deep Purple
                '🚀 Full Stack Developer',
                800,
                () => setTextColor('#00FFC2'), // Mint Green
                '🎨 Frontend Maestro',
                800,
                () => setTextColor('#FF00FF'),  // Electric Pink 
                '💻 MERN Stack Enthusiast',
                800,
                () => setTextColor('#40E0D0'),   // Turquoise
                '',
                '🤖 AI & Machine Learning Explorer',
                800,
                () => setTextColor('(#00FFFF'),   // Electric Blue
                '',
                '💡 Innovative Thinker',
                800,
                () => setTextColor('#40E0D0'),   // Turquoise
                '',
                '🚀 Agile & Scrum Enthusiast',
                800,
                () => setTextColor('#FFD700'),   // Gold 
                '',
                '🛠️ Toolbelt: Git, Docker, VSCode',
                800,
                () => setTextColor('#8A2BE2'),   //Deep Purple
                '',
            ]}
            repeat={Infinity}
        />

    );
};

export default TypeAnimationReact;