//Constructor functions are more efficient than factory functions.
//constructor functions are capitalized
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

//here, we define properties that are functions outside of the constructor function and add them to the prototype. So we can now access the .rgb method from one place for all of our color variables. Note that we still have access to THIS's new context, which is the newly created object
//this function turns rgb values into a string compatible with CSS
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

//this function converts rgb to hex
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

//this function adds in an 'a' channel into the rgb. In the param we give it a default of 1.
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};

//when we call this color function with 'new', it does a few things
//1. creates a plain object for us
//2. links (sets the constructor of) this object to another object
//3. passes the newly created object from step one as the 'this' context
//4. returns 'this' (the new object) if the function doesn't already return it's own object
//5. in our new object's __proto__, there will be a constructor object set to Color
const color1 = new Color(255, 40, 34);
const color2 = new Color(45, 156, 200);
console.log(color1.rgba());

//THIS CLARIFICATION
//if I did color1.hex, 'this' would refer to color1
//if I did color2.rgb, 'this' would refer to color2

//ALSO REMEMBER DONT USE ARROW FUINCTIONS WITH THIS PROCESS
