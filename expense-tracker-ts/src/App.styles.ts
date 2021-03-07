import styled, { createGlobalStyle } from 'styled-components';
import bgImg from './images/cover-min.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
    body {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg});
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    background-color: rgba(215, 215, 215, .5);
    background: linear-gradient(rgba(255,255,255,.4), transparent);
    backdrop-filter: blur(10px);
    color: white;
    padding: 17px 15px;
    width: 100%;
    border-radius: 4px;
    margin: 45px auto;

    @media screen and (max-width: 800px) {
        margin: 20px auto;
        width: 95%;
    }
`;