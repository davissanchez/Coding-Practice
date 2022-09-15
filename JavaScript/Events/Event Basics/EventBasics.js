//okay approach to make events: see the onclick and onmouseenter

const btn = document.querySelector("#buttonid");

function scream() {
  console.log("S:OEDUIGHW:OE");
}
btn.onclick = scream;
btn.onmouseenter = scream;

//BEST APPROACH for working with events: use a method called addEventListener
//......with addEventListener, you specify the event type and a callback to run
const btn2 = document.querySelector("#buttonid2");

btn2.addEventListener("click", () => {
  alert("clicked");
});
