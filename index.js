const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");
const header = document.getElementById("header");
const activeFilterButton = document.querySelectorAll(".filter__item");
const scrollUpButton = document.getElementById("scroll-up");

window.onload = function () {
  const allItems = document.querySelector('[data-filter="all"]');
  allItems.classList.add("active-link");
};

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

navLink.forEach((nav) => {
  nav.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

document.addEventListener("scroll", () => {
  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// swiper container
let swiper = new Swiper(".popular", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    750: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

// filtering mixup section
let mixer = mixitup(".featured__card-container", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});

// adding the active class to the
// all button onloading the screen
function addActiveClass() {
  activeFilterButton.forEach((filterItem) => {
    filterItem.classList.remove("active-link");
  });
  this.classList.add("active-link");
}

activeFilterButton.forEach((filterItem) => {
  filterItem.addEventListener("click", addActiveClass);
});

// scroll up button section
function scrollUpTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function scrollUp() {
  this.scrollY > 200 ? scrollUpButton.classList.add("show-scroll-button") : scrollUpButton.classList.remove("show-scroll-button");
  scrollUpButton.addEventListener("click", scrollUpTop);
}

window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section");

function scrollActive() {
  sections.forEach((section) => {
    const scrolledHeight = window.pageYOffset;
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.id;

    if (scrolledHeight >= sectionTop && scrolledHeight <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-section");
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-section");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2400,
  delay: 400,
  reset: false,
});

// sr2.reveal(".nav__logo", { origin: "left", opacity: 0 });
// sr2.reveal(".nav__menu", { origin: "right", opacity: 0 });
sr.reveal(".title-header .title");
sr.reveal(".title-header .sub-title", { delay: 500 });
sr.reveal(".title-header .desc", { delay: 600 });
sr.reveal(".preview", { delay: 900 });
sr.reveal(".performance", { delay: 1200, origin: "bottom" });
sr.reveal(".button", { delay: 1500, origin: "bottom", opacity: 0, distance: "120px" });
sr.reveal(".about__image img", { origin: "left", duration: 3000 });
sr.reveal(".about__image .image__description", { delay: 200, origin: "bottom" });
sr.reveal(".about__expressiveness", { delay: 500, origin: "right" });
sr.reveal(".about__tradition", { delay: 700, origin: "left" });
sr.reveal(".popular__title", { delay: 400, origin: "bottom" });
sr.reveal(".swiper-wrapper", { delay: 600, origin: "bottom" });
sr.reveal(".features__image", { delay: 400, origin: "bottom", distance: "0px", opacity: 0 });
sr.reveal(".features__card-map", { delay: 600, origin: "bottom" });
sr.reveal(".feature__card1", { delay: 1200, origin: "left" });
sr.reveal(".feature__card2", { delay: 1200, origin: "right" });
sr.reveal(".feature__card3", { delay: 1200, origin: "left" });
sr.reveal(".featured__heading", { delay: 400, origin: "bottom" });
sr.reveal(".featured__filter-section", { delay: 700, origin: "bottom" });
sr.reveal(".featured__card", { delay: 1000, duration: 4000, opacity: 0, distance: "0px" });
sr.reveal(".logo__item", { delay: 400, duration: 4000, origin: "bottom" });
sr.reveal(".footer__logo", { delay: 400, origin: "left" });
sr.reveal(".footer__content", { delay: 700, origin: "left" });
sr.reveal(".copyright", { dealy: 1200, origin: "bottom" });
