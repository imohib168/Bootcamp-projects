import styled from 'styled-components';

export const SkillsSec = styled.div`
    padding: 25px 0px;
    background: linear-gradient(to bottom right, rgb(0, 43, 43), rgb(0,0,0));

    @media screen and (max-width: 960px) {
        background: linear-gradient(to top right, rgb(0, 0, 0), rgb(0, 43, 43));
    }
`
export const SkillsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 950px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-self: flex-start;
    height: 600px;
    width: 600px;

    @media screen and (max-width: 1100px) {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 300px;
    }
`

export const SkillsBar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Tag = styled.h1`
    margin-bottom: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: lightgray;
`
export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
`
export const SkillName = styled.p`
    font-family: monospace;
    font-size: 28px;
    letter-spacing: 3px;
    margin-bottom: 10px;
    color: lightgray;
`
export const SkillMeter = styled.div`
    height: 20px;
    background-color: gray;
    position: relative;
    border-radius: 25px;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        height: 14px;
    }
`
export const Meter1 = styled.span`
    display: block;
    height: 100%;
    width: 95%;
    background-color: #4f4f4f;
    position: relative;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`

export const Meter2 = styled.span`
    display: block;
    height: 100%;
    width: 90%;
    background-color: #4f4f4f;
    position: relative;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`

export const Meter3 = styled.span`
    display: block;
    height: 100%;
    width: 80%;
    background-color: #4f4f4f;
    position: relative;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`

export const Meter4 = styled.span`
    display: block;
    height: 100%;
    width: 80%;
    background-color: #4f4f4f;
    position: relative;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`

export const Meter5 = styled.span`
    display: block;
    height: 100%;
    width: 70%;
    background-color: #4f4f4f;
    position: relative;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`