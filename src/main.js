import "./style.css";

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const mobileHamburger = document.getElementById("mobile-hamburger");
const body = document.getElementById("main-body");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});

mobileHamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    body.classList.toggle("overflow-hidden");
});

