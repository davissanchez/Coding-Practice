//extends and super help us share functionality between classes

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    //super: this Cat class now has its own constructor with a unique livesLeft property. To make sure we get everything from the parent constructor in the Pet class, we use super.  NOTE: super is not necessary if the parent class's constructor is all you need. Super is only needed if you need to add onto the parent constructor but don't want to copy everything over.
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "Meow!";
  }
}

class Dog extends Pet {
  bark() {
    return "Woof!";
  }
}

const missy = new Cat("Missy", 19);
console.log(missy);
//looking at the console:
//- missy has access to the constructor in Pet because of the extends keyword
//- the method in the Pet class, eat, is also available along with the Cat specific method meow
