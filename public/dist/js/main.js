const overlay = document.querySelector(".overlay");

// Navigation elements
const navBtn = document.querySelector(".nav-btn");
const burgerSpan = document.querySelector(".nav-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const navCTA = document.querySelector(".nav__cta");
const navItems = document.querySelectorAll(".nav__item");
let displayMenu = false;

// Form elements
const addNewBtn = document.querySelector(".btn--add-new");
const form = document.querySelector(".form");
const cancelBtn = document.querySelector(".btn--cancel");

const openOverlay = () => {
  overlay.classList.add("open");
};

const closeOverlay = () => {
  overlay.classList.remove("open");
};

// Open navigation
const toggleNavigation = function (arr) {
  if (!displayMenu) {
    arr.forEach((el) => el.classList.add("open"));
    navItems.forEach((item) => item.classList.add("open"));

    displayMenu = true;
  } else {
    arr.forEach((el) => el.classList.remove("open"));
    navItems.forEach((el) => el.classList.remove("open"));

    displayMenu = false;
  }
};

navBtn.addEventListener("click", () => {
  toggleNavigation([burgerSpan, nav, navMenu, navCTA, overlay]);
});

// Open form
addNewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openOverlay();
  form.classList.add("open");
});

// Close form
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("open");
  closeOverlay();
});
