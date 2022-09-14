//selecting an element by ID:
const banner = document.getElementById("banner");
console.log(banner);
console.dir(banner);

//selecting elements by their tag name or class name:
//the html collection that we get is not an array, so we don't have access to functions like .map, but we do have .length, indeces, and we can use for loops to iterate through them
const allImages = document.getElementsByTagName("img");
console.dir(allImages[1]);
//below when we iterate over them we are getting the sources from all the images, in html the images all have src= , and that's where it pulls from
for (let img of allImages) {
  console.log(img.src);
}

const squareImages = document.getElementsByClassName("square");
for (let img of squareImages) {
  //whatever you wanna do to all images in square class
}

//QUERY SELECTOR:
//........a newer, all-in-one method to select a single element
//query selector only gives us the first match
document.querySelector("#banner"); //to select an ID
document.querySelector(".square"); //to select a class
document.querySelector("img:nth-of-type(2)"); //to select a specific image, if you don't want the first one
//TO SELECT an html element with a specific attribute,
const anchorTagJava = document.querySelector('a[title="Java"]');
console.log(anchorTagJava);
//TO SELECT everything:
const p = document.querySelectorAll("p");
console.log(p);

//MOVING ON FROM SELECTING, NOW MANIPULATION
//textContent looks at everything including elements
//innerText just looks at text
const textExample = document.querySelector("p");
console.log(textExample.textContent);
console.log(textExample.innerText);

//italicizing h1 text using innerHTML
document.querySelector("h1").innerHTML = "<i>Silkie Chickens</i>";
document.querySelector("h1").innerHTML += "<sup><i>Sup Bitch</i></sup>";

//getAttribute gets the attribute directly from the html
const firstLink = document.querySelector("a");
console.log(firstLink.getAttribute("href"));
//setAttribute helps you set the attribute to something else
const inputFun = document.querySelector('input[id="practiceinput"]');
console.log(inputFun.setAttribute("type", "color"));

//CHANGING STYLES: when you access css properties they must be camel cased, no dashes or anything
const h1Variable = document.querySelector("h1");
h1Variable.style.fontSize = "3em";

const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
  link.style.color = "peru";
  link.style.textDecorationColor = "magenta";
}

//CHANGING STYLES BETTER WAY:
//......applying things to an existing css class
//first, we use the classlist.add method
const h2Var = document.querySelector("h2");
h2Var.classList.add("purple");
h2Var.classList.add("border");
//classlist.toggle switches classes on and off, very useful
h2Var.classList.toggle("border");
h2Var.classList.toggle("border");
//toggled it twice because I want it to stay on

//parentElement helps traverse up if we need to
const firstBold = document.querySelector("b");
console.log(firstBold.parentElement);

//.children shows us the children, it will look like an array but it's NOT an array

//there is also .nextElementSibling and .previousElementSibling

//CREATING NEW ELEMENTS ENTIRELY: append and appendChild
const newImg = document.createElement("img");
console.dir(newImg);

newImg.src =
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shkodra_1924.jpg";

//now I'm going to put the new image into the body
document.body.appendChild(newImg);
newImg.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "I am new!";
document.body.appendChild(newH3);

//append is more flexible than appendchild
newH3.append("I am new text from append!");

//creating something new with append and putting it somewhere specific. look on mdn how insertAdjacentElement works.
const h2 = document.createElement("h2");
h2.append("are adorable chickens.");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);

//you can remove elemnts too bbut this is ridiculous look it up if you need it
