let input = prompt("What would you like to do?");
const toDos = ["Collect Chicken Eggs", "Clean Litter Box"];
while (input !== "quit") {
  if (input === "list") {
    console.log("******************");
    for (let i = 0; i < toDos.length; i++) {
      console.log(`${i}: ${toDos[i]}`);
    }
    console.log("******************");
  } else if (input === "new") {
    const newTodo = prompt("Enter your to do.");
    toDos.push(newTodo);
    console.log(`${newTodo} has been added to the list.`);
  } else if (input === "delete") {
    for (let i = 0; i < toDos.length; i++) {
      console.log(`${i}: ${toDos[i]}`);
    }
    const index = prompt(
      "Ok, enter the index for the item that you want to delete."
    );
    const deleted = toDos.splice(index, 1);
    console.log(`${deleted} has been deleted.`);
  }
  input = prompt("What would you like to do?");
}
console.log("You quit the app.");
