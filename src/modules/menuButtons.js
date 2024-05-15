import { displayAddNewTodoPopup, clearToDos } from "./displayController.js";
import { deleteAllToDo } from "./todo.js";

const addNew = document.getElementById("add-todo-button");
const clearAll = document.getElementById("clear-all-button");

const initializeMenuButtons = () => {
  addNew.addEventListener("click", () => displayAddNewTodoPopup());
  clearAll.addEventListener("click", () => {
    clearToDos();
    deleteAllToDo();
  });
};

export { initializeMenuButtons };
