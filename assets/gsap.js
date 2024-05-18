
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    },
    x: () => window.innerWidth - 200,
    y: () => window.innerHeight - 400,
  width: 200,
  height: 200
});
