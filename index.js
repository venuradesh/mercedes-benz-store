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
