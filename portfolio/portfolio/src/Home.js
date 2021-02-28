import React from 'react';
import { About, Skills, Contact, Portfolio } from './Components/index';

import { HomePage } from './Home.elements';

const Home = () => {
    return (
        <HomePage to="/">
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </HomePage>
    )
}

export default Home
