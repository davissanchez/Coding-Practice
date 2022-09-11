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

//adding something to a high index and creating empty slots
days[9] = "Birthday";
console.log(days);
console.log(days.length);
console.log(days[5]);

//array methods
let movieLine = ["Tom", "Nancy", "Pablo", "David"];

console.log("PUSH");
//push: add to the end
movieLine.push("Oliver", "Hermione");
console.log(movieLine);

console.log("POP");
//pop: remove from the end
movieLine.pop();
console.log(movieLine);

console.log("SHIFT");
//shift: remove from start. it returns the value that it removes, so you can set a variable to the shift method and then the variable will contain that thing...could come in handy
movieLine.shift();
console.log(movieLine);
let nextPatron = movieLine.shift();
console.log(nextPatron);
console.log(movieLine);

console.log("UNSHIFT");
//unshift: add to start
movieLine.unshift("VIP");
console.log(movieLine);

//other array methods
let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];
//concatenate
console.log(cats.concat(dogs));

//includes: boolean that is case sensitive
console.log(cats.includes("blue"));

//index of: similar to how it works on a string - returns index
console.log(dogs.indexOf("rusty"));

//reverse: switches order of an array and changes the original
console.log(movieLine.reverse());

//slice: gets a copy of a portion of an array
let moreColors = ["red", "orange", "yellow", "green", "blue", "purple"];
let coolColors = moreColors.slice(3);
//this will go from the specified index to the very end - you NEED the new variable declaration of coolColors because if you slice moreColors it won't save to the original
console.log(coolColors);
let warmColors = moreColors.slice(0, 3);
//this takes the 0th item up to but not including the third item
console.log(warmColors);
let example = moreColors.slice(-2);
//passing in a negative index takes from the end
console.log(example);

//splice: removes or replaces existing elements and adds new elements
//splice is destructive and replaces the original copy
moreColors.splice(2, 2, "Mellow Yellow", "Ganja Green");
//syntax: x.splice(starting index, how many things to delete starting from specified index, what you want to add in)
console.log(moreColors);

//sort: sorts an array - if you just use it with empty parentheses is sorts it by its code values which is fully useless. we'll learn more about it later

//nesting arrays:
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//to get something using its index, you just put the first level index next to the second level and so on. see below:
let x = nestedArray[1][2];
console.log(x);
