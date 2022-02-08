const modalButton = document.querySelector(".open-modal");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

function alertButtonHandler() {
  modalBg.classList.remove("modal-hidden");
  document.body.style.overflow = "hidden";
}
function modalCloseHandler() {
  modalBg.classList.add("modal-hidden");
  document.body.style.overflow = "visible";
}

modalButton.addEventListener("click", alertButtonHandler);
modalClose.addEventListener("click", modalCloseHandler);

