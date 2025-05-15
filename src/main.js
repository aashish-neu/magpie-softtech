import "./style.css";

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const mobileHamburger = document.getElementById("mobile-hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

mobileHamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});