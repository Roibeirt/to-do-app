import {displayAddNewTodoPopup} from "./displayController.js";

const addNew = document.getElementById("add-todo-button");

const initializeMenuButtons = () => {
    addNew.addEventListener("click", () => displayAddNewTodoPopup());
}

export {initializeMenuButtons};

