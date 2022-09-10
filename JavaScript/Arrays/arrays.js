//to make an empty array
let students = [];

//an array of strings
let colors = ["red", "orange", "yellow"];

//an array of numbers
let lottoNumbers = [19, 22, 45, 32, 11];

//a mixed array
let stuff = [true, 68, "cat", null];

//basic example
let days = ["Monday", "Tuesday", "Wednesday"];
console.log(days);
console.log("Our days array has this many items: " + days.length);
console.log("Pulling from the index of 2 in days array: " + days[2]);
console.log(
  "Taking an index from the array and then the index of that string in the array: " +
    days[0][3]
);
//oh shit we wanted Wednesday to say Thursday! Lets change it using the index:
days[2] = "Thursday";
console.log(days);
console.log(days[2]);
