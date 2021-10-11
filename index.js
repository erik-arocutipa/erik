const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".menu-nav");
toggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
});