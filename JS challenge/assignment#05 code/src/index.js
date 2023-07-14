const bd = document.querySelector("body");
const h2 = document.querySelector("h2");

function Resize() {
  const size = window.innerWidth;
  h2.style.color = "white";
  if (size >= 900) {
    bd.style.backgroundColor = "mediumblue";
  } else if (size < 900 && size >= 700) {
    bd.style.backgroundColor = "darkblue";
  } else if (size < 700 && size >= 500) {
    bd.style.backgroundColor = "indigo";
  } else {
    bd.style.backgroundColor = "purple";
  }
}
window.addEventListener("resize", Resize);
