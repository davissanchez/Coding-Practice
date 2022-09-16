//CREATING OUR OWN PROMISES
//Promises always expect us to pass in a function that has two parameters, first one we call resolve and the second one we call reject. Also note that the promsie lives inside a function
const fakeRequest = (urlVar) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      } else {
        reject("Fake request Error");
      }
    }, 1000);
  });
};
//now we've created our promise. let's use it:
fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request");
    console.log("Fake data is:", data);
    return fakeRequest("/dogs/2");
  })
  .then((data) => {
    console.log("Done with second request");
    console.log("Second set of fake data is:", data);
  })
  .catch((err) => {
    console.log("Fake error:", err);
  });

//MORE PRACTICE: now let's do the delayed background color change thingy using a promise
//note that even though there would be no reason to reject this promise, we still put the parameter there per standard Promise procedure
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

//note that the functions in the .then's are stil returning the delayedColorChane, it's just a very shortened arrow function
delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('YOUR FAKE DATA HERE');
//             }
//             reject('Request Error!');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE WITH REQUEST!")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("OH NO!", err)
//     })

// // const delayedColorChange = (newColor, delay, doNext) => {
// //     setTimeout(() => {
// //         document.body.style.backgroundColor = newColor;
// //         doNext && doNext();
// //     }, delay)
// // }

// // delayedColorChange('red', 1000, () => {
// //     delayedColorChange('orange', 1000, () => {
// //         delayedColorChange('yellow', 1000, () => {
// //             delayedColorChange('green', 1000, () => {
// //                 delayedColorChange('blue', 1000, () => {
// //                     delayedColorChange('indigo', 1000, () => {
// //                         delayedColorChange('violet', 1000, () => {

// //                         })
// //                     })
// //                 })
// //             })
// //         })
// //     })
// // });

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))
