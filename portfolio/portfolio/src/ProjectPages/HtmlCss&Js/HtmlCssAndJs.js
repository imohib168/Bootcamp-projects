import React from 'react';
import InfoSection from './../InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive,
    homeObjSix,
    homeObjSeven,
} from './Data';

const HtmlCssAndJs = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <InfoSection {...homeObjSix} />
            <InfoSection {...homeObjSeven} />
        </>
    )
}

export default HtmlCssAndJs;

