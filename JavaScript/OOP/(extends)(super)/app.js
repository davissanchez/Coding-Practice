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
