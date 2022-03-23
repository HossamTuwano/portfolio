const cross = document.querySelector(".cross_icon");
const sideNav = document.querySelector(".side_nav");
const miniSideNav = document.querySelector(".mini_sideNav");
const collapse = document.querySelector(".collapse_icon");

cross.addEventListener("click", () => {
  sideNav.classList.add("hide");
  miniSideNav.classList.remove("hide");
});

collapse.addEventListener("click", () => {
  miniSideNav.classList.add("hide");
  sideNav.classList.toggle("hide");
});
