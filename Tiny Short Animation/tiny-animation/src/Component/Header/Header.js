import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                Giant
            </div>
            <div className="hamburger">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navItems">
                <ul>
                    <li><a className="navItem">Home</a></li>
                    <li><a className="navItem">About</a></li>
                    <li><a className="navItem">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
