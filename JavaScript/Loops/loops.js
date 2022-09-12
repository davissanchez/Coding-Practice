console.log("TESTING");

for (let i = 1; i < 11; i++) {
  console.log(i);
}

//loop that prints out even numbers 0-20:
for (let z = 0; z < 21; z += 2) {
  console.log(z);
}

//count down from 100 by increments of 10
for (let y = 100; y > 0; y -= 10) {
  console.log(y);
}

//LOOPING OVER AN ARRAY
const animals = ["zebra", "dolphin", "whale"];
for (let a = 0; a < animals.length; a++) {
  console.log(a, animals[a]);
}
//SO, this loop iterates over the array until it reaches the highest index, we pring out the index with a and fetch the name from the index when we pring animals[a]

//WHILE LOOPS
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

//BREAK keyword
//look this up if you need it
