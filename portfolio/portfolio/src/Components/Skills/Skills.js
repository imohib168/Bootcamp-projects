import React, { useEffect } from 'react';
import SkillsImage from './../../SVGs/Skills';
import { Container } from '../../globalStyle';
import { DescriptionContainer } from '../About/About.elements';
import aos from 'aos';
import "aos/dist/aos.css";

import {
    SkillsSec,
    SkillsRow,
    ImageWrapper,
    SkillsBar,
    Tag,
    Skill,
    SkillName,
    SkillMeter,
    Meter1,
    Meter2,
    Meter3,
    Meter4,
    Meter5,
} from './Skills.elements';


const Skills = () => {

    useEffect(() => {
        aos.init({
            duration: 2000,
        });
    }, [])

    return (
        <SkillsSec>
            <Container>
                <SkillsRow>
                    <ImageWrapper data-aos="fade-left">
                        <SkillsImage />
                    </ImageWrapper>
                    <DescriptionContainer data-aos="fade-right">
                        <SkillsBar>
                            <Tag>Profeciency</Tag>
                            <Skill>
                                <SkillName>HTML</SkillName>
                                <SkillMeter>
                                    <Meter1 data-aos="slide-right"></Meter1>
                                </SkillMeter>
                            </Skill>
                            <Skill>
                                <SkillName>CSS</SkillName>
                                <SkillMeter>
                                    <Meter2 data-aos="slide-right"></Meter2>
                                </SkillMeter>
                            </Skill>
                            <Skill>
                                <SkillName>JAVASCRIPT</SkillName>
                                <SkillMeter>
                                    <Meter3 data-aos="slide-right"></Meter3>
                                </SkillMeter>
                            </Skill>
                            <Skill>
                                <SkillName>BOOTSTRAP</SkillName>
                                <SkillMeter>
                                    <Meter4 data-aos="slide-right"></Meter4>
                                </SkillMeter>
                            </Skill>
                            <Skill>
                                <SkillName>REACT</SkillName>
                                <SkillMeter>
                                    <Meter5 data-aos="slide-right"></Meter5>
                                </SkillMeter>
                            </Skill>
                        </SkillsBar>
                    </DescriptionContainer>
                </SkillsRow>
            </Container>
        </SkillsSec>
    )
}

export default Skills;