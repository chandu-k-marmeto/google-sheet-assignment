document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

            // Define the animations for different screen sizes
            function setupAnimation(matchMedia) {
                let boxSize, xPosition, yPosition;

                if (matchMedia.matches) {
                    // Mobile settings
                    boxSize = { width: "100px", height: "100px" };
                    xPosition = "100vw";
                    yPosition = "100vh";
                } else {
                    // Desktop/Tablet settings
                    boxSize = { width: "200px", height: "200px" };
                    xPosition = "100vw";
                    yPosition = "100vh";
                }

                // Set initial box size
                gsap.set("#box", boxSize);

                // Create the animation
                gsap.to("#box", {
                    scrollTrigger: {
                        trigger: "#box",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1 // Smoothly scrubs the animation over 1 second
                    },
                    x: xPosition, // Moves the box horizontally
                    y: yPosition, // Moves the box vertically
                    duration: 3 // Duration of the animation
                });
            }

            // Create a GSAP matchMedia instance
            const mm = gsap.matchMedia();

            // Define responsive breakpoints
            mm.add("(max-width: 768px)", setupAnimation); // For screens up to 768px wide (mobile)
            mm.add("(min-width: 769px)", setupAnimation); 
});