const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

//The above code helps us make tweets. When we click on them, we want them to be removed. However, up until this point our event listeners only work on things that are already there, they can't see into the future and work on elements that we create in the future with other event listeners.

//So, we want our unborn tweets to have the capability to be removed. The unborn tweets will live inside of a ul element, so we will make our event listener on that ul.

//In the function of the ul's event listener, we use...
//.target : this property of the event object represents whatever was clicked on in this case because we are employing a click event. In general, .target references the object onto which the event was dispatched.

//so, now .target will represent our unborn tweets when we click on them, which will be li elements. However, .target will have whatever we clicked on, so we want to make sure it's the intended element, an li. To do this, we attach .nodeName to check the that the nodeName is 'li'.

//Now in our function, we have e.target.nodename which represents the node name of our li, so we set it eqaual to 'LI' and we have e.target.nodeName === 'LI' and the code after the && will run if it's true. We could also use an if statement

//tweetsContainer is the UL
tweetsContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
