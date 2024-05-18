document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box", {
        scrollTrigger: {
            trigger: ".box",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        },
        y: "100vh",
        width: "200px",
        height: "200px"
    });
});