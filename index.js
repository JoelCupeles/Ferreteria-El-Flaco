const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

const navLinkItems = document.querySelectorAll(".nav-links a");

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-active")) {
      navLinks.classList.remove("nav-active");
    }
  });
});