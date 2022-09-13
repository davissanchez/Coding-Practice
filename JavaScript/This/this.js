//in an object with regular information and methods, the THIS keyword allows our methods to access the object's information
const cat = {
  name: "Missy",
  color: "black and white",
  breed: "tuxedo",
  meow: function () {
    console.log(`${this.name} says meow!`);
  },
};
console.log(cat.meow());

//There is a catch with the THIS keyword. Below we are capturing cat.meow in a variable. When cat.meow lives inside of meow2, the THIS keyword now refers to meow2, and meow2.name doesn't exist, so nothing will populate.
const meow2 = cat.meow;
console.log(meow2());

//window object: EVERYTHING is automatically stored in this top level window object. watch this:
function sing() {
  console.log("la la la");
}
window.sing();
