document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
      function setupAnimation(matchMedia) {
          let boxSize, xPosition, yPosition;

          if (matchMedia.matches) {
              boxSize = { width: "100px", height: "100px" };
              xPosition = "100vw";
              yPosition = "100vh";
          } else {
              boxSize = { width: "200px", height: "200px" };
              xPosition = "100vw";
              yPosition = "100vh";
          }
          gsap.set(".box", boxSize);
          gsap.to(".box", {
              scrollTrigger: {
                  trigger: ".box",
                  start: "top top",
                  end: "bottom top",
                  scrub: 2
              },
              x: xPosition,
              y: yPosition
          });
      }
      const mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", setupAnimation); // For screens up to 768px wide (mobile)
      mm.add("(min-width: 769px)", setupAnimation); 
});