import styled from 'styled-components';

export const AboutSec = styled.div`
    padding: 25px 0px;
    background: linear-gradient(to bottom right, rgb(0, 43, 43), rgb(0,0,0));

    @media screen and (max-width: 1000px) {
        background: linear-gradient(to top right, rgba(0, 0, 0, .8), rgb(0, 43, 43));
    }
`
export const AboutRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: start;
    }
`
export const DescriptionContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
export const Heading = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    font-family: 'Tangerine', cursive;
    letter-spacing: 3px;
    color: rgb(165,165,15);

    @media screen and (max-width: 1000px) {
        margin: 20px 0px;
        font-size: 25px;
        margin-bottom: 10px;
    }
`

export const ParagraphDesc = styled.p`
    font-size: 24px;
    width: 90%;
    line-height: 35px;
    letter-spacing: 3px;
    color: rgb(195,195,195);
    font-weight: bold;
    font-family: 'Poiret One', cursive;

    @media screen and (max-width: 1000px) {
        width: 100%;
        line-height: 25px;
        margin-bottom: 25px;
        margin-top: 25px;
    }
`
export const ImageWrapper = styled.div`
    display: flex;
    justify-self: flex-start;
    height: 600px;
    width: 600px;

    @media screen and (max-width: 1000px) {
        margin-left: -80px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 300px;
    }
`;