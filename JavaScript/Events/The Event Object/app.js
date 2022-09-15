document.querySelector("button").addEventListener("click", function (eventObj) {
  console.log(eventObj);
});

//keydown is for when you press any key
//unlike previous events, we pass in a variable, called event in this case, so that we can access the event object in the function, which has so many different capabilities
const inputVar = document.querySelector("input");
inputVar.addEventListener("keydown", (event) => {
  console.log(event.key);
  console.log(event.code);
});
//colt's code:
// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })

// // const input = document.querySelector('input');
// // input.addEventListener('keydown', function (e) {
// //     console.log(e.key)
// //     console.log(e.code)
// // })
// // input.addEventListener('keyup', function () {
// //     console.log("KEYUP")
// // })

// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break
//         default:
//             console.log("IGNORED!")
//     }
// })
