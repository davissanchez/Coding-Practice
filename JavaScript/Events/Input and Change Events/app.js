const input = document.querySelector("input");
const h1 = document.querySelector("h1");

//below is the CHANGE event, which will do something every time the input changes, only occurs when you put something in and leave the input different than how you changed it, so it's different from the one where you're just typing
// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});

//INPUT EVENT
//.........this fires whenever what's in the input changes, and you don't have to leave it for it to fire. The leaving is the only difference between the change and input events
