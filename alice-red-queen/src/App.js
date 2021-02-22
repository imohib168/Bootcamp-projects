import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

const App = () => {

    const sceneryFrames = [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }
    ];

    const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
    };

    const sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
    };

    const queenFrame = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
    ];

    const bgMovement1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
    })

    const bgMovement2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
    })

    const fgMovement1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
    })

    const fgMovement2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
    })

    const aliceRedQueen = useWebAnimations({
        keyframes: queenFrame,
        timing: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
        }
    })

    useEffect(() => {

        var sceneries = [bgMovement1, bgMovement2, fgMovement1, fgMovement2];

        var adjustBackgroundPlayback = () => {
            if (aliceRedQueen.getAnimation().playbackRate < .8) {
                sceneries.forEach((animation) => {
                    animation.getAnimation().playbackRate = aliceRedQueen.getAnimation().playbackRate / 2 * -1;
                })
            } else if (aliceRedQueen.getAnimation().playbackRate > 1.2) {
                sceneries.forEach((animation) => {
                    animation.getAnimation().playbackRate = aliceRedQueen.getAnimation().playbackRate / 2;
                })
            } else {
                sceneries.forEach((animation) => {
                    animation.getAnimation().playbackRate = 0;
                })
            }
        }
        adjustBackgroundPlayback();

        setInterval(() => {
            if (aliceRedQueen.getAnimation().playbackRate > 0.4) {
                aliceRedQueen.getAnimation().playbackRate *= 0.9;
            }
            adjustBackgroundPlayback();
        }, 3000);

        var goFaster = () => {
            aliceRedQueen.getAnimation().playbackRate *= 1.1;
            adjustBackgroundPlayback();
        }

        document.addEventListener("click", goFaster);
        document.addEventListener("touchstart", goFaster);
    }, [])

    return (
        <div className="wrapper">
            <div className="sky" ></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img
                        ref={aliceRedQueen.ref}
                        id="redQueen_and_alice_sprite"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
                </div>
            </div>
            <div
                className="scenery"
                id="foreground1"
                ref={fgMovement1.ref}
            >
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            </div>
            <div
                className="scenery"
                id="foreground2"
                ref={fgMovement2.ref}
            >
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>
            <div
                className="scenery"
                id="background1"
                ref={bgMovement1.ref}
            >
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
            </div>
            <div
                className="scenery"
                id="background2"
                ref={bgMovement2.ref}
            >
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
            </div>
        </div>
    )
}

export default App;