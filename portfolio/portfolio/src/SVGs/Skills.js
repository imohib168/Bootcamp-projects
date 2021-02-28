import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

function Skills() {

    const rotateCard = [
        { transform: "rotateZ(0deg)", transformOrigin: "top", transformBox: "fill-box" },
        { transform: "rotateZ(-8deg)", transformOrigin: "top", transformBox: "fill-box" },
        { transform: "rotateZ(8deg)", transformOrigin: "top", transformBox: "fill-box" }
    ]

    const rotateCardTime = {
        duration: 2500,
        iterations: Infinity,
        direction: "alternate",
    }

    const rotateBubbles = [
        { transform: "rotateZ(0deg)", transformOrigin: "bottom", transformBox: "fill-box" },
        { transform: "rotateZ(-8deg)", transformOrigin: "bottom", transformBox: "fill-box" },
        { transform: "rotateZ(8deg)", transformOrigin: "bottom", transformBox: "fill-box" }
    ]

    const card = useWebAnimations({
        keyframes: rotateCard,
        timing: rotateCardTime,
    })

    const bubbles = useWebAnimations({
        keyframes: rotateBubbles,
        timing: rotateCardTime,
    })

    const leaf1 = useWebAnimations({
        keyframes: rotateBubbles,
        timing: rotateCardTime,
    })
    const leaf2 = useWebAnimations({
        keyframes: rotateBubbles,
        timing: rotateCardTime,
    })
    const leaf3 = useWebAnimations({
        keyframes: rotateBubbles,
        timing: rotateCardTime,
    })
    const leaf4 = useWebAnimations({
        keyframes: rotateBubbles,
        timing: rotateCardTime,
    })

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            fill="none"
            viewBox="0 0 926 646"
        >
            <g id="skills1" clipPath="url(#clip0)">
                <g ref={leaf1.ref} id="Leaf1">
                    <path
                        id="Vector"
                        fill="lightgreen"
                        d="M37.255 603.797c6.914 25.559 30.596 41.387 30.596 41.387s12.472-25.609 5.558-51.167-30.596-41.387-30.596-41.387-12.472 25.609-5.558 51.167z"
                    ></path>
                </g>
                <g ref={leaf2.ref} id="Leaf2">
                    <path
                        id="Vector_2"
                        fill="green"
                        d="M47.415 598.305c18.972 18.468 21.289 46.859 21.289 46.859s-28.443-1.553-47.415-20.022C2.317 606.674 0 578.283 0 578.283s28.442 1.553 47.415 20.022z"
                    ></path>
                </g>
                <g ref={leaf3.ref} id="Leaf4">
                    <path
                        id="Vector_3"
                        fill="green"
                        d="M866.415 599.597c-17.346 20.003-17.261 48.488-17.261 48.488s28.21-3.946 45.557-23.949 17.261-48.488 17.261-48.488-28.21 3.947-45.557 23.949z"
                    ></path>
                </g>
                <g ref={leaf4.ref} id="Leaf3">
                    <path
                        id="Vector_4"
                        fill="lightgreen"
                        d="M876.644 604.961c-4.734 26.05-26.996 43.82-26.996 43.82s-14.588-24.466-9.854-50.516c4.733-26.05 26.996-43.82 26.996-43.82s14.588 24.466 9.854 50.516z"
                    ></path>
                </g>
                <g ref={bubbles.ref} id="Bubbles">
                    <path
                        id="Vector_5"
                        fill="lightgray"
                        d="M191.997 581.338a22.035 22.035 0 00-14.031-20.5 21.999 21.999 0 10-15.938 0 21.997 21.997 0 00-14.031 20.5 21.99 21.99 0 0014.031 20.5 21.999 21.999 0 1015.938 0 22.035 22.035 0 0014.031-20.5zm-42-41a20.001 20.001 0 0132.438-15.679 20.001 20.001 0 01-7.925 35.146 22.028 22.028 0 00-9.026 0 20.018 20.018 0 01-15.487-19.467zm40 82a20.001 20.001 0 01-32.438 15.679 19.996 19.996 0 01-7.072-20.061 20 20 0 0114.997-15.085c2.976.623 6.05.623 9.026 0a20.018 20.018 0 0115.487 19.467zm-15.487-21.533a22.028 22.028 0 00-9.026 0 19.974 19.974 0 01-15.487-19.467 19.978 19.978 0 0115.487-19.467c2.976.623 6.05.623 9.026 0a19.98 19.98 0 010 38.934z"
                    ></path>
                </g>
                <g ref={card.ref} id="Card">
                    <path
                        id="Vector_6"
                        fill="#253d3d"
                        d="M313.497 173v471h436V173h-436zm218 34a15.003 15.003 0 01-13.858-9.26 15 15 0 1113.858 9.26z"
                    ></path>
                    <g id="Card_2">
                        <path
                            id="Vector_7"
                            fill="gray"
                            d="M568.997 487.5h-208a6.999 6.999 0 110-14h208a6.999 6.999 0 110 14z"
                        ></path>
                        <g id="Card_3">
                            <path
                                id="Vector_8"
                                fill="gray"
                                d="M725.997 487.5h-2V506h2v-18.5z"
                            ></path>
                            <path
                                id="Vector_9"
                                fill="gray"
                                d="M732.997 182.5h-2V201h2v-18.5z"
                            ></path>
                            <path
                                id="Vector_10"
                                fill="gray"
                                d="M590.997 271.5h-229a6.999 6.999 0 110-14h229a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_11"
                                fill="gray"
                                d="M590.997 343.5h-229a6.999 6.999 0 110-14h229a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_12"
                                fill="gray"
                                d="M590.997 415.5h-229a6.999 6.999 0 110-14h229a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_13"
                                fill="gray"
                                d="M590.997 487.5h-229a6.999 6.999 0 110-14h229a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_14"
                                fill="gray"
                                d="M590.997 559.5h-229a6.999 6.999 0 110-14h229a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_15"
                                fill="#4f4f4f"
                                d="M550.997 271.5h-190a6.999 6.999 0 110-14h190a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_16"
                                fill="#4f4f4f"
                                d="M491.997 343.5h-131a6.999 6.999 0 110-14h131a6.999 6.999 0 110 14z"
                            ></path>
                            <path
                                id="Vector_17"
                                fill="#4f4f4f"
                                d="M419.997 415.5h-59a6.999 6.999 0 110-14h59a7.003 7.003 0 017 7 6.999 6.999 0 01-7 7z"
                            ></path>
                            <path
                                id="Vector_18"
                                fill="#4f4f4f"
                                d="M522.997 559.5h-162a6.999 6.999 0 110-14h162a6.999 6.999 0 110 14z"
                            ></path>
                        </g>
                        <path
                            id="Vector_19"
                            fill="gray"
                            d="M685.997 257.5h-2v14h2v-14z"
                        ></path>
                        <path
                            id="Vector_20"
                            fill="gray"
                            d="M700.997 272.5a8.003 8.003 0 01-7.391-4.939 7.992 7.992 0 01-.455-4.622 7.993 7.993 0 016.285-6.285 8 8 0 019.561 7.846 8.01 8.01 0 01-8 8zm0-14a5.998 5.998 0 00-5.885 7.171 6.007 6.007 0 004.714 4.714 6.006 6.006 0 006.16-2.552 5.998 5.998 0 00-4.989-9.333z"
                        ></path>
                        <path
                            id="Vector_21"
                            fill="gray"
                            d="M685.997 329.5h-2v14h2v-14z"
                        ></path>
                        <path
                            id="Vector_22"
                            fill="gray"
                            d="M700.997 344.5a8.003 8.003 0 01-7.391-4.939 7.992 7.992 0 01-.455-4.622 7.993 7.993 0 016.285-6.285 8 8 0 019.561 7.846 8.01 8.01 0 01-8 8zm0-14a5.998 5.998 0 00-5.885 7.171 6.007 6.007 0 004.714 4.714 6.006 6.006 0 006.16-2.552 5.998 5.998 0 00-4.989-9.333z"
                        ></path>
                        <path
                            id="Vector_23"
                            fill="gray"
                            d="M685.997 401.5h-2v14h2v-14z"
                        ></path>
                        <path
                            id="Vector_24"
                            fill="gray"
                            d="M700.997 416.5a8.003 8.003 0 01-7.391-4.939 7.992 7.992 0 01-.455-4.622 7.993 7.993 0 016.285-6.285 8 8 0 019.561 7.846 8.01 8.01 0 01-8 8zm0-14a5.998 5.998 0 00-5.885 7.171 6.007 6.007 0 004.714 4.714 6.006 6.006 0 006.16-2.552 5.998 5.998 0 00-4.989-9.333z"
                        ></path>
                        <path
                            id="Vector_25"
                            fill="gray"
                            d="M685.997 473.5h-2v14h2v-14z"
                        ></path>
                        <path
                            id="Vector_26"
                            fill="gray"
                            d="M700.997 488.5a8.003 8.003 0 01-7.391-4.939 7.992 7.992 0 01-.455-4.622 7.993 7.993 0 016.285-6.285 8 8 0 019.561 7.846 8.01 8.01 0 01-8 8zm0-14a5.998 5.998 0 00-5.885 7.171 6.007 6.007 0 004.714 4.714 6.006 6.006 0 006.16-2.552 5.998 5.998 0 00-4.989-9.333z"
                        ></path>
                        <path
                            id="Vector_27"
                            fill="gray"
                            d="M685.997 545.5h-2v14h2v-14z"
                        ></path>
                        <path
                            id="Vector_28"
                            fill="gray"
                            d="M700.997 560.5a8.003 8.003 0 01-7.391-4.939 7.992 7.992 0 01-.455-4.622 7.993 7.993 0 016.285-6.285 8 8 0 019.561 7.846 8.01 8.01 0 01-8 8zm0-14a5.998 5.998 0 00-5.885 7.171 6.007 6.007 0 004.714 4.714 6.006 6.006 0 006.16-2.552 5.998 5.998 0 00-4.989-9.333z"
                        ></path>
                        <path
                            id="Vector_29"
                            fill="#4f4f4f"
                            d="M700.997 268.5a4 4 0 100-8 4 4 0 000 8z"
                        ></path>
                        <path
                            id="Vector_30"
                            fill="#4f4f4f"
                            d="M700.997 484.5a4 4 0 100-8 4 4 0 000 8z"
                        ></path>
                        <path
                            id="Vector_31"
                            fill="#4f4f4f"
                            d="M700.997 556.5a4 4 0 100-8 4 4 0 000 8z"
                        ></path>
                    </g>
                </g>
                <g id="String">
                    <path
                        id="Vector_32"
                        fill="gray"
                        d="M531.497 199a7 7 0 100-14 7 7 0 000 14z"
                    ></path>
                    <path
                        id="Vector_33"
                        fill="gray"
                        d="M531.497 14a7 7 0 100-14 7 7 0 000 14z"
                    ></path>
                    <g id="String_2">
                        <path
                            id="Vector_34"
                            fill="gray"
                            d="M532.497 7h-2v185h2V7z"
                        ></path>
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H925.497V645.184H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default Skills;