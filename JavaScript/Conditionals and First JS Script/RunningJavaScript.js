//note that any code we put in will run, but we won't be able to see it in the console without a console.log()

console.log("Hello from our first JS file!");

//basic if statements
if (1 + 1 === 2) {
  console.log("Math still works!");
}

let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5!");
  console.log(random);
}

if (random >= 0.5) {
  console.log("Your number is greater than 0.5!");
  console.log(random);
}

//else if

const dayOfWeek = "Tuesday";

if (dayOfWeek === "Monday") {
  console.log("Ugh I hate Mondays....");
} else if (dayOfWeek === "Saturday") {
  console.log("Yay I love Saturdays!");
} else if (dayOfWeek === "Friday") {
  console.log("Fridays are nice.");
} else {
  console.log("It is not Monday Friday or Saturday.");
}

const age = 66;

if (age < 5) {
  console.log("You are a baby and get in for free.");
} else if (age < 10) {
  console.log("You are a child and pay 10 dollars.");
} else if (age < 65) {
  console.log("You are an adult and pay 20 dollars.");
} else {
  console.log("You are fucking old!");
}

//else is like the otherwise, if it's anything else see above conditionals
