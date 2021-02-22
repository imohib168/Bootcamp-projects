const svg = document.getElementById("svg");
// console.log(svg);

svg.addEventListener("load", function () {
    var svgDoc = svg.contentDocument;

    var circle1 = svgDoc.getElementById("circle1");
    var circle2 = svgDoc.getElementById("circle2");

    let circleFrame1 = [
        { transform: "translateY(-12px)", },
    ]

    let circleFrame2 = [
        { transform: "translateY(-26px)" }
    ]

    let circleTiming = {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate",
    }

    circle1.animate(circleFrame1, circleTiming);
    circle2.animate(circleFrame2, circleTiming);

    // 

    // Lines
    const line1 = svgDoc.getElementById("line1");
    const line2 = svgDoc.getElementById("line2");
    const line3 = svgDoc.getElementById("line3");
    const line4 = svgDoc.getElementById("line4");

    let moveLine1 = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-40px)" },
        { transform: "translateY(40px)", transform: "rotate(359deg)", transformOrigin: "center" },
    ];
    let moveLine2 = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-30px)" },
        { transform: "translateY(30px)", transform: "rotate(359deg)", transformOrigin: "center" },
    ];
    let moveLine3 = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-20px)" },
        { transform: "translateY(20px)", transform: "rotate(359deg)", transformOrigin: "center" },
    ];
    let moveLine4 = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateY(10px)", transform: "rotate(359deg)", transformOrigin: "center" },
    ];

    let timeLine = {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate",
    }

    line1.animate(moveLine1, timeLine);
    line2.animate(moveLine2, timeLine);
    line3.animate(moveLine3, timeLine);
    line4.animate(moveLine4, timeLine);

    // 
    // // Square
    const square1 = svgDoc.getElementById("square1");
    const square2 = svgDoc.getElementById("square2");

    let squareFrame1 = [
        { transform: "translateY(12px)" }
    ]

    let squareFrame2 = [
        { transform: "translateY(16px)" }
    ]

    let squareTiming = {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate",
    }

    square1.animate(squareFrame1, squareTiming);
    square2.animate(squareFrame2, squareTiming);
})

// // ConstantinopleCT168