console.log("hi");
//creating a new method on the string object via prototype : notice capital String
String.prototype.grumpus = () => alert("Go away!");
console.log(String.prototype);
const cat = "blue";
cat.grumpus();
//..lets make another one!
String.prototype.yell = function () {
  console.log(this);
  //in this case, THIs will give me the string
  return `OMG ${this.toUpperCase()}!!!!!`;
};

console.log("hello".yell());

//overriding existing methods
Array.prototype.pop = function () {
  return "Sorry, I want that element and will not pop.";
};

console.log([1, 2, 3].pop(4));
