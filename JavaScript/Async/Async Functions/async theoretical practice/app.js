//- Simply declaring a function as async returns a Promise that is automatically and magically generated for us
//that process is either resolved or rejected depending on what's going on in the async function: when we return a value, the promise will be resolved with that value. When we throw a value, the promise will be rejected with that value.

// const sing = async () => {
//   throw "problem!!";
//   return "La la la al la";
// };
// sing()
//   .then((data) => {
//     console.log("Promise resolved with:", data);
//   })
//   .catch((err) => {
//     console.log("oh no, promise rejected!");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) {
    throw "Missing Credentials";
  }
  if (password === "davisisawesome") {
    return "Welcome!";
  } else {
    throw "Invalid Password";
  }
};

login("a;lserikgh", "davisisawesome")
  .then((msg) => {
    console.log("Logged in");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
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

// // async function hello() {
// // }

// const sing = async () => {
//     throw "OH NO, PROBLEM!"
//     return 'LA LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log("PROMISE RESOLVED WITH:", data)
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED!")
//         console.log(err)
//     })

// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'corgifeetarecute') return 'WELCOME!'
//     throw 'Invalid Password'
// }

// login('todd', 'corgifeetarecute')
//     .then(msg => {
//         console.log("LOGGED IN!")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("ERROR!")
//         console.log(err)
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// // delayedColorChange('red', 1000)
// //     .then(() => delayedColorChange('orange', 1000))
// //     .then(() => delayedColorChange('yellow', 1000))
// //     .then(() => delayedColorChange('green', 1000))
// //     .then(() => delayedColorChange('blue', 1000))
// //     .then(() => delayedColorChange('indigo', 1000))
// //     .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return "ALL DONE!"
// }

// // rainbow().then(() => console.log("END OF RAINBOW!"))

// async function printRainbow() {
//     await rainbow();
//     console.log("END OF RAINBOW!")
// }

// printRainbow();

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 2000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     } catch (e) {
//         console.log("CAUGHT AN ERROR!")
//         console.log("error is:", e)
//     }

// }
