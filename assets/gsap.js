
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    },
    x: window.innerWidth - 200px,
    y: window.innerHeight - 200px
});
