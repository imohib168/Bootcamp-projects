import React from 'react';
import InfoSection from './../InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive,
    homeObjSix,
} from './Data';

const HtmlAndCss = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <InfoSection {...homeObjSix} />
        </>
    )
}

export default HtmlAndCss;