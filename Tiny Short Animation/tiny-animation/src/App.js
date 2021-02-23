import React from 'react';

import Header from './Component/Header/Header';
import Body from './Component/Body/Body';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="glass">
                <Header />
                <Body />
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    )
}

export default App;