import React, { useState } from 'react';
import nike from './../../images/nike.png';

import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Link onClick={closeMobileMenu} to="/"><img src={nike} alt="Nike Logo" /></Link>
                </div>
                <div className="navbar__menuIcon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'navbar__items active' : 'navbar__items'}>
                    <li
                        onClick={closeMobileMenu}
                    >
                        <Link className="navbar__links" to="/">
                            Home
                        </Link>
                    </li>
                    <li
                        onClick={closeMobileMenu}
                    >
                        <Link className="navbar__links" to="about">
                            About
                        </Link>
                    </li>
                    <li
                        onClick={closeMobileMenu}
                    >
                        <Link className="navbar__links" to="products">
                            Products
                        </Link>
                    </li>
                    <li
                        onClick={closeMobileMenu}
                    >
                        <Link className="navbar__cart" to="cart">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="quan">2</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
