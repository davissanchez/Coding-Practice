const formVar = document.querySelector("#shelterform");
const inputVar = document.querySelector("#catInput");
let ulCats = document.querySelector("#cats");
formVar.addEventListener("submit", function (event) {
  event.preventDefault();
  //preventDefault keeps the form from submitting, can be useful in many situations
  const newLi = document.createElement("li");
  let availableCats = inputVar.value;
  newLi.innerText = availableCats;
  ulCats.append(newLi);
  inputVar.value = "";
});
//the input object has a .value method which is very useful for extracting data from inputs
console.log(inputVar.value);

//.
// .
// .
// .
// .
// .
// .
// .
// .
// .
// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }
