import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
html {
    scroll-behavior: smooth;
}
body {
    overflow-x: hidden;
    /* width: 100%; */
}
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 5px 20px;

    @media screen and (max-width: 990px) {
        padding: 2px 10px;
    }
`

export const Button = styled.button`
    width: 35%;
    margin-top: 20px;
    padding: 8px 20px;
    font-size: 28px;
    font-family: verdana;
    border-radius: 2px;
    background: transparent;
    border: 2px solid rgb(165,165,15);
    cursor: pointer;
    outline: none;
    font-family: 'Marck Script', cursive;
    letter-spacing: 6px;
    font-weight: bold;
    color: rgb(165,165,15);
    z-index: 2;

    &:hover {
        border: 2px solid transparent;
        background: rgb(165, 165, 15);
        color: black;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 20px;
        margin-bottom: 20px;
        border: 2px solid gray;
        color: gray;
    }
`