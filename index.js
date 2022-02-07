const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const aside = document.querySelector(".aside");
const docContent = document.querySelector(".doc-content");
const mainContent = document.querySelector(".main-content");
const asideLinks = document.querySelectorAll(".aside-link");

function closeMenuHandler() {
  if (window.innerWidth < 512) {
    aside.classList.add("hidden");
    openMenu.style.display = "block";
    aside.style.display = "none";
    docContent.style.display = "inline-block";
    docContent.style.width = "100%";
  } 
  else {
    location.reload();
  }
}
function openMenuHandler() {
  if (window.innerWidth < 512) {
    aside.style.display = "inline-block";
    aside.style.width = "100%";
    closeMenu.classList.remove("hidden");
    openMenu.style.display = "none";
  }
  else{
    location.reload();
  }
}

function linkActiveHandler(link){
  asideLinks.forEach(link=>link.classList.remove("active"));
  link.classList.add("active");
}

closeMenu.addEventListener("click", closeMenuHandler);
openMenu.addEventListener("click", openMenuHandler);
asideLinks.forEach(link =>link.addEventListener("click",()=>linkActiveHandler(link)));
