//DEFINE A FUNCTION
//NOTE: Functions do not run until we execute them.
function funcName() {
  //do something
}

function singSong() {
  console.log("la la la");
}
singSong();

//ARGUMENTS are what we put in the parentheses in our functions, could do things like average numbers or input something into a string
function greet(firstName) {
  console.log(`Hey there, ${firstName}!`);
}
greet("Gianna");
greet(46);

//a function with multiple arguments
function madLib(place, pluralThing) {
  console.log(
    `It was a pleasant day in ${place} until it suddenly started raining ${pluralThing}!`
  );
}
madLib("Washington DC", "Llamas");
//another one with multiple arguments using a for loop
function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += ` ${str}`;
  }
  console.log(result);
}
repeat("HI THERE", 3);

//RETURN
//most functions return something, so far we've just been printing shit out
//it provides an output as well as the ending point for the function. NOTHING after 'return' in the function will run

function addFunction(x, y) {
  let sum = x + y;
  return sum;
}
console.log(addFunction(34, 14));
console.log(addFunction(addFunction(51, 49), 100));

function capitalize(str) {
  let newString = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(newString);
  return newString;
}
capitalize("eggplant");

function sumArray(arrayOfNumbers) {
  let total = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    total = total + arrayOfNumbers[i];
  }
  console.log(total);
  return total;
}
sumArray([1, 3, 5]);

const daysOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};
function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else {
    return daysOfWeek[num];
  }
}
console.log(returnDay(2));
