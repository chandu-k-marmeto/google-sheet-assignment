
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    },
    x: () => document.querySelector('.box-container').getBoundingClientRect().bottom - 200,
    y: () => window.innerWidth - 200,
  width: 200,
  height: 200
});
