//even better way than constructor functions:
//Classes!
//remember: we are creating a template object for a color with properties r, g, and b, and we want this object to have the methods .rgb, .hex, and .rgba (on the prototype). These methods are referenced in the constructor and factory functions files.
//Main benefits of writing all of this as a single class:
//1. We don't have to add methods to the prototype manually like we do with constructor functions
//2. We don't have to separately define our constructor function w/ basic properties and the other properties that are methods on the prototype. This is harder to keep track of.
//.
//.
//explaining syntax of a class:
//- Class names are uppercase.
//- We always add in a constructor, which is a function that will execute immediately whenever a new instance of a class (or in this instance a color) is created. We don't have to call this function, it's automatic.
//----in the constructor, we often access THIS, which refers to the object being created, like c1 or c2. (or THIS = the instance of the class)
//----the constructor is often used to add basic properties that need to be there for other properties that are functions.
//-----The constructor's parameters are unique to the individual object created. Eg every individual color will have different r, g, and b values. These params live in the object itself.
//directly below the constructors are the methods(which is just a function in an object), which are shared by all objects, or in this case, colors. Notice the new syntax. When added in this manner, they go direclty on the prototype. Note that the example methods are the same as constructor and factory files.

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    //remember destructuring: this just makes the keys into variables that equal the values so we can use them below. Same as if we did this.r etc in the return line.
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    //notice this example of referencing other methods using THIS
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${this.innerRGB()},${a})`;
  }
}

//look at constructor functions file foe explanation of new keyword
const pastelBabyBlue = new Color(162, 193, 242, "Pastel Baby Blue");
const white = new Color(255, 255, 255, "White");

console.log(pastelBabyBlue.rgb());
console.log(pastelBabyBlue.hex());
console.log(white.hex());
console.log(pastelBabyBlue.rgba(0.25));
document.body.style.backgroundColor = pastelBabyBlue.rgba(0.5);

//below this will be true because they reference the same method on the prototype. Notice there's no parentheses after hex
console.log(pastelBabyBlue.hex === white.hex);
