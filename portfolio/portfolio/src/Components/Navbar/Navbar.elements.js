import styled from 'styled-components';
import { Container } from '../../globalStyle';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background-color: black;
    color: white;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    font-size: 20px;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-family: 'Mr Dafoe', cursive;
    letter-spacing: 4px;
    color: #8ea302;
    outline: none;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

export const HamburgerMenuMobile = styled.div`
    display: none;

    @media screen and (max-width: 950px) {
        display: block;
        cursor: pointer;
        justify-self: flex-end;
    }
`;

export const NavbarMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 10vh;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
}
`
export const NavbarItem = styled.li`
    margin: 0px 15px;

    @media screen and (max-width: 960px) {
        width: 100%;
        margin: 20px 0px;

        &:hover {
            border: none;
        }
}
`
export const NavLinkForHome = styled(Link)`
    color: #A09F11;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 2rem;
    height: 100%;
    box-shadow: inset 0 0 0 0 gray;
    transition: ease-in-out 0.8s;

    &:hover {
        box-shadow: inset 400px 0 0 0 brown;
    }
    
    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 25px;
        width: 100%;
        display: table;

        &:hover {
            background-color: #003153;
        }
    }
`

export const NavLink = styled.a`
    color: #A09F11;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 2rem;
    height: 100%;
    box-shadow: inset 0 0 0 0 gray;
    transition: ease-in-out 0.8s;

    &:hover {
        box-shadow: inset 400px 0 0 0 brown;
    }
    
    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 25px;
        width: 100%;
        display: table;

        &:hover {
            background-color: #003153;
        }
    }
`
