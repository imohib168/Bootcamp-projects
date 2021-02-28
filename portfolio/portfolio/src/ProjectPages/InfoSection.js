import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from './../globalStyle';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    ImgWrapper,
    Img,
    Preview
} from './InfoSection.elements';

function InfoSection({
    primary,
    topLine,
    headline,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    projectLink,
}) {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headline}</Heading>
                                <Preview href={projectLink} target="_blank">
                                    <Button primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Preview>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default InfoSection;