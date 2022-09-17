const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

//This was taken from the Creating Promises folder. We are going to learn how to write the same thing with the async and await keywords
// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

//USING AWAIT instead of .then:
//...so: the await keyword pauses everything and makes sure that nothing happens until the promise after it is resolved. In the below example, delayedColorChange returns a promise, and no subsequent lines will be executed until that promise is resolved
//NOTE that since our promise isn't supposed to have a possibility of rejection, there is no throw statement in this async function, just a return statement to run when the promise is resolved.
async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("purple", 1000);
  return console.log("All done!");
}

//This little async function shows how async functions can depend on other async functions...oh brother.
//so: This async function awaits the completion of the rainbow in order to do it's thing. And it's invisible magically created promise won't resolve until the other one is dealth with because we're awaiting it, and then i'll return some shit
async function printRainbow() {
  await rainbow();
  console.log("End of ranbow! :D ");
  return "a;owriehgta;oi"; //this line is unnecessary in this instance
}

printRainbow();
//now this listtle function makes everyhting happen, because it triggers the rainbow function which is referencing the promise

//NEW BETTER EXAMPLE: now we'll do an example where the async function deals with an error and we're making a fake request
//remember: this is a fake request fucntion that returns a promise whose rejection/resolution is contingent on whether the random number/dely is greater than 4 seconds
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

//this function will make two requests by calling on the fakeRequestPromise function and passing in a url. Remember fakeRequestPromise returns a promise and will reject or resolve. SO: When we await fakeRequestPromise, if it's resolved then that resolution will be stored in the variable that we declare - first one is called data1. In this case, if the promise is resolved the first time then data1 will equal 'Here is your fake data from /page1'. It will then move onto the next code. However, it it is rejected, then it won't run any further code and we'll run into issues. This is why we use try catch, with all of the awaits inside of the try{} and the error inside of the catch{}.
async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise("/page1");
    console.log(data1);
    let data2 = await fakeRequestPromise("/page2");
    console.log(data2);
  } catch (error) {
    console.log(`Caught an error: ${error}`);
  }
}

makeTwoRequests();
