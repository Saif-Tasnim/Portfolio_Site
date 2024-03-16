import React from 'react';
import { particlesConfig } from './particles';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const ParticlesAnimation = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (

        <Particles
            id='tsparticles'
            options={particlesConfig}
            init={particlesInit}
        >

        </Particles>

    );
};

export default ParticlesAnimation;