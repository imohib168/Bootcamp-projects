import React, { useEffect } from 'react';
import { Container } from './../../globalStyle';
import aos from 'aos';
import "aos/dist/aos.css";

import {
    CardContainer,
    CardWrapper,
    Card,
    Heading,
    ButtonLink,
    Button,
} from './Portfolio.elements'

const Portfolio = () => {

    useEffect(() => {
        aos.init({
            duration: 2000,
        });
    }, [])

    return (
        <>
            <CardContainer id="portfolio">
                <Container>
                    <CardWrapper>
                        <Card data-aos="fade-down">
                            <Heading>HTML & CSS Projects</Heading>
                            <Button>
                                <ButtonLink to="/htmlAndCssProjects">
                                    See Projects
                                </ButtonLink>
                            </Button>
                        </Card>
                        <Card data-aos="flip-up">
                            <Heading>HTML, CSS & JS Projects</Heading>
                            <Button>
                                <ButtonLink to="/htmlCssAndJsProjects">
                                    See Projects
                                </ButtonLink>
                            </Button>
                        </Card>
                        <Card data-aos="fade-up">
                            <Heading>React Projects</Heading>
                            <Button>
                                <ButtonLink to="/reactProjects">
                                    See Projects
                                </ButtonLink>
                            </Button>
                        </Card>
                    </CardWrapper>
                </Container>
            </CardContainer>
        </>
    )
}
export default Portfolio;