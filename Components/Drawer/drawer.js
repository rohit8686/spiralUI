const menu = document.querySelector(".menu-icon");
const asideNav = document.querySelector(".aside-nav");

function menuHandler() {
  asideNav.classList.toggle("hide");
}

menu.addEventListener("click", menuHandler);
