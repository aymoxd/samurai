gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".box").forEach(box => {
    gsap.from(box, {
        y: 40,
        opacity: 0,
        duration: 0.35,
        ease: "power3.out",
        scrollTrigger: {
            trigger: box,
            start: "top bottom",
            toggleActions: "play none none none",
            once: true
        }
    });
});


//lenis
const lenis = new Lenis({
  duration: 2.0, 
  smooth: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
