import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CodeImage from './../../Images/code.jpg';

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background: url(${CodeImage});
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 1024px) {
        height: auto;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 40px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 10px;
    }
`

export const Card = styled.div`
    background: gray;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    backdrop-filter: blur(5px);
    color: white;
    height: 300px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 5px;
        margin: 15px 0px;
    }
`

export const Heading = styled.h2`
    font-family: 'Poiret One', cursive;
    color: gray;
    font-style: italic;
    letter-spacing: 2px;
    font-size: 26px;
    margin-bottom: 20px;

    @media screen and (max-width: 1024px) {
        font-size: 20px;
    }
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: gray;
    font-family: 'Marck Script', cursive;

    &:hover {
        color: rgb(165, 165, 15);
        transition: all 0.5s ease-in-out;
    }
`

export const Button = styled.button`
    width: 80%;
    margin-top: 20px;
    padding: 6px 16px;
    font-size: 24px;
    border-radius: 2px;
    background: transparent;
    border: 2px solid gray;
    cursor: pointer;
    outline: none;
    letter-spacing: 6px;
    font-weight: bold;

    &:hover {
        border: 2px solid rgb(165, 165, 15);
        transition: all 0.5s ease-in-out;   
    }

    @media screen and (max-width: 1024px) {
        width: 90%;
        font-size: 20px;
        letter-spacing: 4px;
    }
`