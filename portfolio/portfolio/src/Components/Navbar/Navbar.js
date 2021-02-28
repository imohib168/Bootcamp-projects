import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    HamburgerMenuMobile,
    NavbarMenu,
    NavbarItem,
    NavLink,
    NavLinkForHome
} from './Navbar.elements';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Mohib Ismail
                </NavLogo>
                <HamburgerMenuMobile onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </HamburgerMenuMobile>
                <NavbarMenu onClick={handleClick} click={click}>
                    <NavbarItem>
                        <NavLinkForHome to="/">
                            Home
                        </NavLinkForHome>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink href="#about">
                            About
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink href="#portfolio">
                            Portfolio
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink href="#contact">
                            Contact
                        </NavLink>
                    </NavbarItem>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
