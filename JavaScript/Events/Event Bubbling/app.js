const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColor();
  //the stopPropogation function on the event object makes sure that this event doesn't bubble up and the button is alone. Now, clicking the button will not also trigger the hide event that its div has.
  e.stopPropagation();
});
container.addEventListener("click", function () {
  container.classList.toggle("hide");
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
