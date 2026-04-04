gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".box").forEach(box => {
    gsap.from(box, {
        y: 30,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        scrollTrigger: {
            trigger: box,
            start: "top bottom",
            toggleActions: "play none none none",
            once: true
        }
    });
});