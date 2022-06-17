
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-menu");
let link = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

link.forEach((event) => event.addEventListener("click", closeHamburger));

function closeHamburger() {
  hamburger.classList.remove("active");
  menu.classList.remove(".active");
}
