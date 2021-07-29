const dToggle = document.querySelector(".dashboard-menu > span");
// const dPhar = document.querySelectorAll(".dashboard-items > a > p");
const dMenu = document.querySelector(".dashboard-menu");
const dLogo = document.querySelector(".dashboard-logo");
const dContent = document.querySelector(".dashboard-box");

// DOM MANIPULATION
dToggle.addEventListener("click", function () {
  // for (let i = 0; i < dPhar.length; i++) {
  //   const data = dPhar[i];
  //   data.classList.toggle("d-hidden");
  // }
  dMenu.classList.toggle("d-size");
});

dContent.addEventListener("click", function () {
  dMenu.classList.add("d-size");
});
