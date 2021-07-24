const dToggle = document.querySelector(".dashboard-menu > span");
const dPhar = document.querySelectorAll(".dashboard-items > a > p");
const dMenu = document.querySelector(".dashboard-menu");
const dLogo = document.querySelectorAll(".dashboard-logo");

// DOM MANIPULATION
dToggle.addEventListener("click", function () {
  for (let i = 0; i < dPhar.length; i++) {
    const data = dPhar[i];
    data.classList.toggle("d-hidden");
  }
  dMenu.classList.toggle("d-size");
  dLogo[0].classList.toggle("d-hidden");
  dLogo[1].classList.toggle("d-hidden");
});
