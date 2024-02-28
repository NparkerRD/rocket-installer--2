const navBtn = document.querySelector(".nav-btn");
const burgerSpan = document.querySelector(".nav-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const navCTA = document.querySelector(".nav__cta");
const navItems = document.querySelectorAll(".nav__item");
let displayMenu = false;

const toggleNav = function () {
  if (!displayMenu) {
    burgerSpan.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navCTA.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    displayMenu = true;
  } else {
    burgerSpan.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navCTA.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    displayMenu = false;
  }
};

navBtn.addEventListener("click", toggleNav);
