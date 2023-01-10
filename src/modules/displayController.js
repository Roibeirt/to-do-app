import {
  todoCardFragment,
  todoPopupFragment,
  createAddNewTodoFragment,
} from "./fragments.js";

const todoArea = document.getElementById("todos");
const popupArea = document.getElementById("popups");

// clear screens

const clearToDos = () => {
  while (todoArea.firstChild) {
    todoArea.firstChild.remove();
  }
};

const clearPopups = () => {
  while (popupArea.firstChild) {
    popupArea.firstChild.remove();
  }
};

// display popups

const displayAddNewTodoPopup = () => {
  clearPopups();
  popupArea.appendChild(createAddNewTodoFragment());
};

//display todos

const displayTodo = (todoFragment) => {
  todoArea.appendChild(todoFragment);
};

export { displayAddNewTodoPopup, clearPopups, clearToDos, displayTodo };
