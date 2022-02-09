const baseline = document.querySelector(".baseline");
const leading = document.querySelector(".leading");
const stacked = document.querySelector(".stacked");
const snackbarBaseline = document.querySelector(".snackbar-baseline");
const snackbarLeading = document.querySelector(".snackbar-leading");
const snackbarStacked = document.querySelector(".snackbar-stacked");

function baselineHandler() {
  console.log("baseline");
  snackbarBaseline.classList.remove("baseline-hidden");
  setTimeout(() => snackbarBaseline.classList.add("baseline-hidden"), 5000);
  snackbarLeading.classList.add("leading-hidden");
  snackbarStacked.classList.add("stacked-hidden");
}
baseline.addEventListener("click", baselineHandler);

function leadingHandler() {
  console.log("leading");
  snackbarLeading.classList.remove("leading-hidden");
  setTimeout(() => snackbarLeading.classList.add("leading-hidden"), 5000);
  snackbarBaseline.classList.add("baseline-hidden");
  snackbarStacked.classList.add("stacked-hidden");
}
leading.addEventListener("click", leadingHandler);

function stackedHandler() {
  console.log("Stacked");
  snackbarStacked.classList.remove("stacked-hidden");
  setTimeout(() => snackbarStacked.classList.add("stacked-hidden"), 5000);
  snackbarBaseline.classList.add("baseline-hidden");
  snackbarLeading.classList.add("leading-hidden");
}
stacked.addEventListener("click", stackedHandler);
