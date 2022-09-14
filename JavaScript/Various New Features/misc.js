//Default Parameters: setting the parameter equal to something makes it so that it defaults to that if someone leaves it off
console.log("Testing");
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie(32));
console.log(rollDie());

//SPREAD for Function Calls
//............expands an iterable(array string etc) into a list of arguments
//example: Let's say we want to find the maximum number of an array using Math.max. Math.max takes numbers as parameters, but we have an array of number. We can use spread to turn this array into a set of parameters.
const nums = [13, 4, 6, 458, 45789, 900, 23445, 22];
let x = Math.max(...nums);
console.log(x);
//the three dots are what spreads the array out into arguments

//SPREAD with Array Literals
//.......this can take two arrays and put them into one array
const cats = ["Missy", "Daisy", "Tiger"];
const dogs = ["Casey", "Toby", "Pepper"];
//now the three dots below help us mash these together
const allPets = [...cats, ...dogs];
console.log(allPets);

//SPREAD: in Object Literals
//..........copies properties from one object into another object literal
const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  isFurry: true,
  family: "Caninae",
};
const catDog = { ...feline, ...canine };
//note that there's a conflict here because they both have family as an ID. Since feline comes first, feline 'wins' that conflict and its family is copied over into the new object
console.log(catDog);
//we can also add more to our objects too!
const addExample = {
  ...feline,
  ...canine,
  isMammal: true,
  hasTail: true,
};
console.log(addExample);

//ARGUMENTS OBJECT
//......this is a built in object that acts like an array. It has a length property but does not have methods like push/pop. It's also not available insid eof arrow functions!
//....and yes, it basically is just what's inside the argumments
//eg
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumAll(3, 5, 10));
//what if we wanted to do this with reduce??
function sum() {
  return arguments.reduce((total, el) => total + el);
}
//this won't work because arguments can't use the reduce method!!!! we therefore need.......................
//REST! it looks like spread, but it's not!
function sumWithRest(...nums) {
  //the three dots are the REST, and they collect the rest of the parameters after the first one and turn them all into an array
  return nums.reduce((total, el) => total + el);
}
console.log(sumWithRest(100, 150, 50, 47));

//another example with REST:
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold Medal Goes to: ${gold}`);
  console.log(`Silver Medal Goes to: ${silver}`);
  console.log(`and thanks to everyone else:  ${everyoneElse}`);
}
raceResults("Gary", "Spongebob", "Patrick", "Sandy", "Mr. Krabs");

//DESTRUCTURING Arrays
//......a short, clean syntax to 'unpack': values from arrays and properties from objects into distinct variables
const scores = [73734, 3455, 789, 24, 5];
//here it is below, it creates new variables:
const [gold, silver, bronze, ...noMedal] = scores;
console.log(gold, silver, bronze, noMedal);

//DESTRUCTURING Objects
//.....
const user = {
  email: "harvey@gmail.com",
  password: "suppppassword",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  city: "San Francisco",
  state: "California",
};

const { email, firstName, lastName, city, state } = user;
//this created a bunch of variables whose names match they key in the object
console.log(email);
console.log(firstName);
console.log(lastName);
console.log(city);
console.log(state);

//here's how you create a variable that has a different name than the key: birthYear is the new name
const { born: birthYear } = user;
console.log(birthYear);

//DESTRUCTURING Parameters
function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
//this above save us from having to use user.firstName and user.lastName on line 114, could be useful if I was doing a lot with them. HOWEVER, if I'm only going to  use firstName and lastName in this function and don't need any other items from the user object, then I can just destructure them right in the function parameter. See below: The parameter is expecting an object, and when passed that object (which in this case will be user), it'll destructure firstName and lastName and use them as variables for the parameters
function fullName2({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
console.log(fullName2(user));
