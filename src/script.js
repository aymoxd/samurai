const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const overlay = document.querySelector(".overlay");
const aside = document.getElementById("aside");

//===================== menu "asidebar" ===========================
function openMenu() {
  aside.classList.remove("-right-72");
  aside.classList.add("right-0");
  overlay.classList.remove("hidden");
}
function closeMenu() {
  aside.classList.remove("right-0");
  aside.classList.add("-right-72");
  overlay.classList.add("hidden");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll("#aside a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

//===================== GSAP ===========================
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".box").forEach((box) => {
  gsap.from(box, {
    y: 40,
    opacity: 0,
    duration: 0.35,
    ease: "power3.out",
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      toggleActions: "play none none none",
      once: true,
    },
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
/*
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
*/
