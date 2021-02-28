import React from 'react';
import AboutImage from './../../SVGs/About';
import { Container, Button } from '../../globalStyle';
import {
    AboutSec,
    AboutRow,
    DescriptionContainer,
    Heading,
    ParagraphDesc,
    ImageWrapper,
} from './About.elements';

const About = () => {

    return (
        <AboutSec id="about">
            <Container>
                <AboutRow>
                    <DescriptionContainer>
                        <Heading>Hello, I'm Mohib Ismail</Heading>
                        <ParagraphDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum nemo et consequuntur laudantium. Repellat, a totam temporibus praesentium expedita magnam non numquam fuga incidunt? Odit ad quae blanditiis. Soluta.</ParagraphDesc>
                        <Button>Contact</Button>
                    </DescriptionContainer>
                    <ImageWrapper>
                        <AboutImage />
                    </ImageWrapper>
                </AboutRow>
            </Container>
        </AboutSec>
    )
}

export default About;
