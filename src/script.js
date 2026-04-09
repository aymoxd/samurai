
//===================== GSAP ===========================
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


//=================== LENIS =============================
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

//=================== SWIIPER =============================

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  //auto play
   autoplay: {
   delay: 5000,
 },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});