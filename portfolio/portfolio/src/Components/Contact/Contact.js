import React, { useEffect } from 'react';
import AboutImage from '../../SVGs/Contact';
import { Container } from '../../globalStyle';
import { DescriptionContainer } from '../About/About.elements';
import aos from 'aos';
import "aos/dist/aos.css";
import {
    AboutSec,
    AboutRow,
    Heading,
    ImageWrapper,
    ContactWrapper,
    MobileNumber,
    Email,
    SocialAccountsIcons,
    Icon,
    Facebook,
    Gmail,
    Whatsapp,
} from './Contact.elements';

const Contact = () => {

    useEffect(() => {
        aos.init({
            duration: 2000,
        });
    }, [])

    return (
        <AboutSec id="contact">
            <Container>
                <AboutRow>
                    <DescriptionContainer data-aos="fade-up">
                        <Heading>Contact Me</Heading>
                        <ContactWrapper>
                            <MobileNumber>
                                +92 312 0221217
                            </MobileNumber>
                            <Email>
                                imohib168@gmail.com
                            </Email>
                            <SocialAccountsIcons>
                                <Icon href="https://www.facebook.com/Mohib.168/" target="_blank">
                                    <Facebook />
                                </Icon>
                                <Icon href="mailto: imohib168@gmail.com" target="_blank">
                                    <Gmail />
                                </Icon>
                                <Icon href="tel:+92 312 0221217" target="_blank">
                                    <Whatsapp />
                                </Icon>
                            </SocialAccountsIcons>
                        </ContactWrapper>
                    </DescriptionContainer>
                    <ImageWrapper data-aos="fade-down">
                        <AboutImage />
                    </ImageWrapper>
                </AboutRow>
            </Container>
        </AboutSec>
    )
}

export default Contact;
