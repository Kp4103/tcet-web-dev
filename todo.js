class Todo {
    constructor() {
        this.todos = [];
    }

    // Method to add a todo
    add(todo) {
        this.todos.push(todo);
    }

    // Method to remove a todo by index
    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        } else {
            console.log("Invalid index");
        }
    }

    // Method to update a todo by index
    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        } else {
            console.log("Invalid index");
        }
    }

    // Method to get all todos
    getAll() {
        return this.todos;
    }

    // Method to get a specific todo by index
    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        } else {
            console.log("Invalid index");
            return null;
        }
    }

    // Method to clear all todos
    clear() {
        this.todos = [];
    }
}

// Example usage
const myTodos = new Todo();

myTodos.add("Learn JavaScript");
myTodos.add("Practice coding");
myTodos.add("Read a book");

console.log(myTodos.getAll()); // ["Learn JavaScript", "Practice coding", "Read a book"]

myTodos.update(1, "Practice more coding");
console.log(myTodos.get(1)); // "Practice more coding"

myTodos.remove(0);
console.log(myTodos.getAll()); // ["Practice more coding", "Read a book"]

myTodos.clear();
console.log(myTodos.getAll()); // []
