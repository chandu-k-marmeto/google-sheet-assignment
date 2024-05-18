
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 3
    },
    x: () => document.querySelector('.box-container').offsetHeight - 200,
    y: () => document.querySelector('.box-container').getBoundingClientRect().right - 200,
  width: 200,
  height: 200
});
