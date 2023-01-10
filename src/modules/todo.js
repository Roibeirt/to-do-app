import { createTodoFragment } from "./fragments";
import { clearTodos, displayTodo } from "./displayController";
// todo class
class Todo {
  constructor(title, date, description) {
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
  todos.push(todo);
  console.log(todo);
};

const populateTodos = () => {
  for (const x of todos) {
    let fragment = createTodoFragment(x.title, x.date, x.description);
    displayTodo(fragment);
  }
};

//

const todos = [];

export { createToDo, populateTodos };
