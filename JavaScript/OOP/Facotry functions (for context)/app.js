//don't worry about this function it was taken from somewhere else. It turns an rbg color into hex.
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//this function takes an rgb color and makes it a string so we can use it in CSS
function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

//now we want an object where we can convert back and forth between rgb and hex without having to pass in numbers each time
//....we'll use a function
//this is a FACTORY FUNCTION. We pass in some values, and the "factory" makes us an object and returns it at the end
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  //here's a method with our function that turns our color's rgb into a string
  color.rgb = function () {
    //remember destrucutring: r, g, and b (keys) are now variables that equal their corresponding values, which are passed into the function.
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  //here's our method that turns our rgb color into hex
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 234, 123);
console.log(firstColor.rgb(), firstColor.hex(), firstColor.r);

//NOW HERE ARE THE SHORTCOMINGS OF FACTORY FUNCTIONS
//...every time we make a new color object, those three r g and b properties are added along with the function properties. This stuff has to be recreated and added to each color object every time. There is no reason to have a bunch of unique functions in every object. Other built in methods, like .pop or .push live on the prototype and only have to exist once. Solving this problem is where the constructor function enters.
