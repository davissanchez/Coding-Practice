const buttonVar = document.querySelector("button");
const bodyVar = document.querySelector("body");
const h1Var = document.querySelector("h1");
buttonVar.addEventListener("click", () => {
  let colorVar = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  bodyVar.style.backgroundColor = colorVar;
  h1Var.innerText = colorVar;
});
