import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Svg from './Svg';

const BikeSvg = () => {

    const rotateWheel = [
        { transform: "rotateZ(0deg)", transformOrigin: "center", transformBox: "fill-box" },
        { transform: "rotateZ(360deg)", transformOrigin: "center", transformBox: "fill-box" }
    ]

    const rotateWheelTime = {
        duration: 2000,
        iterations: Infinity,
        ease: "linear",
    }

    const bikeFrame = [
        { transform: "rotateX(0deg)", transformOrigin: "bottom", },
        { transform: "rotateX(20deg)", transformOrigin: "bottom" }
    ]

    const bikeTiming = {
        duration: 1000,
        iterations: Infinity,
        ease: "linear",
        direction: "alternate",
    }

    const capFrame = [
        { transform: "translateY(0%)", transformOrigin: "center", transformBox: "fill-box" },
        { transform: "translateY(30%)", transformOrigin: "center", transformBox: "fill-box" }
    ]

    const capFrameTime = {
        duration: 1000,
        iterations: Infinity,
        ease: "ease-in-out",
        direction: "alternate",
    }

    // 
    const rightWheel = useWebAnimations({
        keyframes: rotateWheel,
        timing: rotateWheelTime,
    });
    const leftWheel = useWebAnimations({
        keyframes: rotateWheel,
        timing: rotateWheelTime,
    });
    const manOnBike = useWebAnimations({
        keyframes: bikeFrame,
        timing: bikeTiming,
    });
    const cap = useWebAnimations({
        keyframes: capFrame,
        timing: capFrameTime,
    });

    return (
        <>
            <Svg
                rightWheel={rightWheel}
                leftWheel={leftWheel}
                manOnBike={manOnBike}
                cap={cap}
            />
        </>
    )
}

export default BikeSvg;
