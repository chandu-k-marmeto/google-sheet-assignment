document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box", {
        scrollTrigger: {
            trigger: ".box",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        },
        y: "100vh", // Moves the box from top to bottom of the viewport
        width: "200px",
        height: "200px"
    });
});