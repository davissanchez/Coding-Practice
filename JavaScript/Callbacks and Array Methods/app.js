//the forEach method

const numbers = [1, 2, 3, 4, 5, 6, 7];

function print(element) {
  console.log(element);
}

numbers.forEach(print);
//this does the print function for each item in the numbers array

//another way to do the same thing, but more common syntax:
const nums = [1, 3, 5, 7, 8];
nums.forEach(function (el) {
  console.log(el);
});

//the MAP method creates a new array with the results of calling a callback on every element in the array
//so it basically just iterates through every item in the array but automatically creates a new element in the array with the results
//using numbers array above:
const doubleNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubleNumbers);

//ARROW FUNCTIONS are syntactically compact
//they are used to create function expressions
const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};
//here's an arrow function with an IMPLICIT RETURN...so it has no return keyword. notice the parentheses instead of curly braces and no semi colon:
const randomNum = () => Math.random();
console.log(randomNum());
//another function with an implicit return:
const addition = (a, b) => a + b;
console.log(addition(34, 4));

//FILTER: creates a new array with all elements that pass the test implemented by the provided function
let g = numbers.filter((n) => {
  return n === 4;
});
console.log(g);
//in this example, only 4 will be added to the array because it will be the only item that passes the boolean
let u = numbers.filter(function (n) {
  return n < 4;
});
console.log(u);

//SOME and EVERY are boolean methods - tests is every element or some element(s) passes a boolean
const exams = [80, 76, 90, 97, 69, 88];
let didAllPass = exams.every((score) => score >= 70);
console.log(didAllPass);
let didSomePass = exams.some((score) => score >= 70);
console.log(didSomePass);

//udemy exerrcise: Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.
function allEvens(arr) {
  let areAllEven = arr.every(function (num) {
    return num % 2 === 0;
  });
  return areAllEven;
}

//REDUCE: executes a reducer function on each element of the array resulting in ONE single value below is syntax:
[3, 4, 5].reduce((accumulator, currentValue) => {
  return; //whatever you want it to do
});
//the accumulator is what it is getting reduced down to, or what the current number is after each iteration through the array. changes each time until the final product
//the currentValue is a variable represents each individual element when it's turn to be iterated over comes
//.....\
//here we are summing up the prices using reduce. an alternative to using a for loop
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
const totalSpent = prices.reduce((total, price) => {
  return total + price;
});
console.log(totalSpent);
//to find the minimum value:
const minPrice = prices.reduce((min, item) => {
  if (min < item) {
    return min;
  } else {
    return item;
  }
});
console.log(minPrice);

//DON'T USE KEYWORD THIS WITH ARROW FUNCTIONS
