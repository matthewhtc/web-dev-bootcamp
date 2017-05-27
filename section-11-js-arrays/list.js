var todos = ["buy new turtle"]; 
var input = prompt("What would you like to do?"); 

while (input !== "quit") {

	if (input === "list") {
		listTodos(); 
	}
	else if (input === "new") {
		addTodo(); 
	}
	else if (input === "delete") {
		deleteTodo(); 
	}
	input = prompt("What would you like to do?"); 
}

console.log("you have quit the app"); 

function listTodos() {
	console.log("**********");
	todos.forEach(function(todo, i) { //currentValue, index
		console.log(i + ": " + todo); 
	});
	console.log("**********");
}

function addTodo() {
	//ask for new todo
	var newToDo = prompt("Enter new todo"); 
	todos.push(newToDo); 
	console.log("added todo"); 
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete"); 
	//splice()
	todos.splice(index, 1); //finds that index, and deletes 1 item following that index
	console.log("deleted todo"); 
}