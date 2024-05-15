import { createTodoFragment } from "./fragments/toDoCard";
import { displayTodo, clearToDos } from "./displayController";
import { v4 as uuidv4 } from "uuid";

// todo class
class Todo {
  constructor(title, date, description) {
    this.id = uuidv4();
    this.title = title;
    this.date = date;
    this.description = description;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
    return this.title;
  }

  changeDate(newDate) {
    this.date = newDate;
    return this.date;
  }

  changeDescription(newDescription) {
    this.description = newDescription;
    return this.description;
  }
}

const createToDo = (title, date, description) => {
  const newToDo = new Todo(title, date, description);
  storeToDo(newToDo);
};

const storeToDo = (todo) => {
  localStorage.setItem(todo.id, JSON.stringify(todo));
  console.log(JSON.stringify(todo));
};

const deleteToDo = (todo) => {
  localStorage.removeItem(todo.id);
  populateTodos();
};

const deleteAllToDo = () => {
  localStorage.clear();
};

const populateTodos = () => {
  clearToDos();

  for (let x = 0; x < localStorage.length; x++) {
    let todo = JSON.parse(localStorage.getItem(localStorage.key(x)));
    let fragment = createTodoFragment(todo.title, todo.date, todo.description);
    displayTodo(fragment);
  }
};

//

export { createToDo, populateTodos, deleteToDo, deleteAllToDo };
