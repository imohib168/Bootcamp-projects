const svg = document.getElementById("svg");

svg.addEventListener("load", function () {
    let document = svg.contentDocument;

    const rightWheel = document.getElementById("rightWheel");
    const leftWheel = document.getElementById("leftWheel");
    const manOnBike = document.getElementById("manOnBike");
    const cap = document.getElementById("cap");

    console.log("Hello");

    const rotateWheel = [
        { transform: "rotateZ(0deg)", transformOrigin: "center", transformBox: "fill-box" },
        { transform: "rotateZ(360deg)", transformOrigin: "center", transformBox: "fill-box" }
    ]

    const rotateWheelTime = {
        duration: 2000,
        iterations: Infinity,
        ease: "linear",
    }

    rightWheel.animate(rotateWheel, rotateWheelTime);
    leftWheel.animate(rotateWheel, rotateWheelTime);

    // 


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

    manOnBike.animate(bikeFrame, bikeTiming);


    // 

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

    cap.animate(capFrame, capFrameTime);
})