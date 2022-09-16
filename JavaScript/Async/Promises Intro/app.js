// THE CALLBACK VERSION:: BAD
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
//****************************************BEST PRACTICE************************************************ */
// THE PROMISE VERSION: GOOD
//thie whole function just returns a Promise...ignore syntax for now
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
//*************************************************************************************** */
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%BEST PRACTICE%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
//remember, fakeRequestPromise is just a function that returns a promise object, to which we chain .then statements and pass in functions that run if the promise is resolved (remember to return the promise object and pass in the next thing so you can keep chaining), and we chain on a .catch statement at the end and pass in a function that runs if the promise gets rejected
//Also important: we put 'data', a variable, as a paramater into our .then statements because we would want to actually get the data from the request and do something with it. The og promise outlined above returns some fake data upon success, and we capture that by passing a variable into the function that's being passed into .then. Fuck what a headache
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("IT WORKED!!!!!! (page1)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page2)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page3)");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO, A REQUEST FAILED!!!");
    console.log(err);
  });
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//NOTE: you do not need to capture the promise into a variable but I did here to make it easier to follow
const promiseVar = fakeRequestPromise("yelp.com");
//this above line returns a Promise object via the function above. Note that we captured said promise object in the variable promiseVar
//now, if I want to run code only if the promise is resolved, use the promiseVar.then and pass in a function that runs if the promise is resolved/fulfilled (idk the difference). Now  I also want to run something if the promise is rejected. To do this, chain on .catch and pass in another function.
promiseVar
  .then(function () {
    //console.log("Promise Resolved!");
  })
  .catch(function () {
    //console.log("Promise Rejected!");
  });
//THIS IS THE HORRIBLE CALLBACK HELL VERSION
// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

//.........................................................................
//THIS IS A BETTER WAY BUT NOT MUCH BETTER THAN ABOVE
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })
