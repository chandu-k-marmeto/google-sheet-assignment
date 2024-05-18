
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
  x: () => document.querySelector('.box-container').offsetWidth - 200,
  y: () => document.querySelector('.box-container').offsetHeight - 200,
  width: 200,
  height: 200,
});

console.log(document.querySelector('.box-container').offsetHeight, document.querySelector('.box-container').getBoundingClientRect().right )