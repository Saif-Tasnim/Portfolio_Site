import React from 'react';
import Header from '../Components/PCCompo/Header/Header';
import Banner from '../Components/PCCompo/Banner/Banner';
import About from '../Components/PCCompo/About/About';
import Experience from '../Components/PCCompo/Experience/Experience';
import Skills from '../Components/PCCompo/Skills/Skills';
import Education from '../Components/PCCompo/Education/Education';
import Projects from '../Components/PCCompo/Projects/Projects';
import Contact from '../Components/PCCompo/Contact/Contact';
import ParticlesAnimation from '../Animation/ParticlesAnimation';

const PortfolioPage = () => {
    return (
        <div>
            <div className='h-screen'>
                <ParticlesAnimation></ParticlesAnimation>
                <Header></Header>
                <Banner></Banner>
            </div>

            <About></About>
            <Experience></Experience>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default PortfolioPage;