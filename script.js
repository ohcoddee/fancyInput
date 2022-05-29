const input = document.querySelector("input");
const div = document.querySelector("div");

input.addEventListener("focus", onFocus);
function onFocus() {
  div.style.width = "200vw";
  div.style.height = "200vh";
  div.style.transition = "0.5s ease-in-out";
}

input.addEventListener("blur", onBlur);
function onBlur() {
  div.style.width = "0";
  div.style.height = "0";
}
