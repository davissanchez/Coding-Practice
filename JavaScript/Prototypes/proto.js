console.log("hi");
//creating a new method on the string object via prototype : notice capital String
String.prototype.grumpus = () => alert("Go away!");
console.log(String.prototype);
const cat = "blue";
cat.grumpus();
