// // document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.getElementById("burger");
//   const nav = document.querySelector(".nav");

//   // burger.addEventListener("click", function () {
//     nav.classList.toggle("active");
//     burger.classList.toggle("active");
//   });
// });

// Vælg burger-ikonet, navigationen og menuen
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

// Tilføj en event listener, der reagerer på klik på burger-ikonet
burger.addEventListener("click", burgerClick);

// Funktion, der bliver kaldt når burger-ikonet bliver klikket
function burgerClick() {
  // Toggler (tilføjer eller fjerner) 'active' klassen på burger-ikonet
  burger.classList.toggle("active");
  // Toggler (tilføjer eller fjerner) 'active' klassen på navigationen (menuen)
  nav.classList.toggle("active");
}

// Tilføj en event listener, der reagerer på klik på menuen
menu.addEventListener("click", menuClick);

// Funktion, der bliver kaldt når menuen bliver klikket
function menuClick() {
  // Fjerner 'active' klassen fra burger-ikonet (gør det til et normalt ikon)
  burger.classList.remove("active");
  // Fjerner 'active' klassen fra navigationen (lukker menuen)
  nav.classList.remove("active");
}
