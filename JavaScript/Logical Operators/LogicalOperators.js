console.log("TESTING");

//&& and operator needs both sides to be true
const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid Password");
} else {
  console.log("Invalid password");
}

//|| or operator needs only one side to be true
const age = -1;
if ((age >= 0 && age < 5) || age >= 65) {
  console.log("FREE");
} else if (age < 18 && age >= 5) {
  console.log("10 dollars");
} else if (age < 65 && age >= 10) {
  console.log("20 dollars");
} else {
  console.log("Invalid age!");
}

//! not operator
const firstName = prompt("Enter your first name");
//for below, having an empty string is falsy, so saying if NOT first name, or if the firstName is falsy by having no value, then run the code
if (!firstName) {
  firstName = prompt("Try again!");
} else {
  console.log(firstName);
}

const age2 = 45;
//in the line below, notice the not operator on the whole thing that sees if the person is a baby or a senior
if (!((age2 >= 0 && age2 < 5) || age2 >= 65)) {
  console.log("You are not a baby or a senior.");
} else {
  console.log("You are a baby or a senior");
}

//don't worry about switch statements!!!!!!!!! not very common
//swtich statement demonstration: In javascript, once a switch statement gets a match, it'll keep running everything else until you hit a break, which is why we put breaks in everything so that we can single our shit out
const day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Its Monday!");
    break;
  case "Tuesday":
    console.log("Its Tuesday!");
    break;
  case "Wednesday":
    console.log("Its Wednesday!");
    break;
  case "Thursday":
    console.log("Its Thursday!");
    break;
  case "Friday":
    console.log("Its Friday!");
    break;
  case "Saturday":
    console.log("Its Saturday!");
    break;
  case "Sunday":
    console.log("Its Sunday!");
    break;
  default:
    console.log("Input a day of the week");
}
