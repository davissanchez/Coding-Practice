console.log("TESTING TESTING");

const password = prompt("Please enter a new password");

//password must be 6+ characters and cannot include a space
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    //above line searches for a space and returns the index, if something doesn't exist then it returns an index of -1...and since we want a space to not exist then we want the index to return -1
    console.log("Valid Password");
  } else {
    console.log("Your password cannot include spaces.");
  }
} else {
  console.log("Password too short, make it 6 or more characters.");
}
