let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let light = document.querySelector(".light");

sun.onclick = function () {
  light.classList.add("light");
  light.classList.remove("dark");
};

moon.onclick = function () {
  light.classList.add("dark");
  light.classList.remove("light");
};
