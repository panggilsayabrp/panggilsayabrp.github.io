const buttonNav = document.querySelector(".button-nav");
const navMenu = document.querySelector("ul");

buttonNav.addEventListener("click", mobileMenu);

function mobileMenu() {
    buttonNav.classList.toggle("active");
    navMenu.classList.toggle("active");
}