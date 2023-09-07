gsap.to("nav", {
    backgroundColor: "white",
    color:"#184E51",
    // duration: 0.5,
    height: "98px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to("nav a",{
    color: "#184E51",
    scrollTrigger: {
        trigger:"nav a",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to(".main", {
    backgroundColor: "#184E51",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -20%",
        end: "top -60%",
        // markers: true,
        scrub: 2
    }
})