// import functions for buttons
import { createToDo, populateTodos } from "../todo";
import { clearPopups } from "../displayController";

// add-new fragment
const createAddNewTodoFragment = () => {
  const addNewTodoFragment = new DocumentFragment();

  const addNewTodo = document.createElement("div");
  addNewTodo.id = "add-new-todo";

  // factory for input containers
  const inputContainerCreator = () => {
    const inputContainerDiv = document.createElement("div");
    inputContainerDiv.classList = "input-container";
    return inputContainerDiv;
  };

  // factory for input labels
  const labelCreator = (labelfor, labeltext) => {
    const inputLabel = document.createElement("label");
    inputLabel.htmlFor = labelfor;
    inputLabel.textContent = labeltext;
    return inputLabel;
  };

  // factory for inputs
  const inputCreator = (inputType, inputName, inputId) => {
    const newInput = document.createElement("input");
    newInput.type = inputType;
    newInput.name = inputName;
    newInput.id = inputId;
    return newInput;
  };

  // title elements

  const titleInputContainer = inputContainerCreator();
  const titleLabel = labelCreator("todo-title-input", "Title:");
  const titleInput = inputCreator(
    "text",
    "todo-title-input",
    "todo-title-input"
  );

  // title structure
  titleInputContainer.appendChild(titleLabel);
  titleInputContainer.appendChild(titleInput);

  // date elements
  const dateInputContainer = inputContainerCreator();
  const dateLabel = labelCreator("todo-date-input", "Date / Time:");
  const dateInput = inputCreator("date", "todo-date-input", "todo-date-input");

  // date structure
  dateInputContainer.appendChild(dateLabel);
  dateInputContainer.appendChild(dateInput);

  // description elements
  const descriptionInputContainer = inputContainerCreator();
  const descriptionLabel = labelCreator(
    "todo-description-input",
    "Description:"
  );
  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "todo-description-input";
  descriptionInput.id = "todo-description-input";
  descriptionInput.rows = "8";
  descriptionInput.cols = "20";

  // description structure
  descriptionInputContainer.appendChild(descriptionLabel);
  descriptionInputContainer.appendChild(descriptionInput);

  // button elements
  const inputButtonsContainer = inputContainerCreator();
  const inputSubmitButton = document.createElement("button");
  inputSubmitButton.classList = "submit-button";
  inputSubmitButton.textContent = "Submit";
  const inputCloseButton = document.createElement("button");
  inputCloseButton.classList = "submit-button";
  inputCloseButton.textContent = "Close";
  inputCloseButton.addEventListener("click", () => clearPopups());

  // button structure
  inputButtonsContainer.appendChild(inputSubmitButton);
  inputButtonsContainer.appendChild(inputCloseButton);

  // add-new-popup structure
  addNewTodo.appendChild(titleInputContainer);
  addNewTodo.appendChild(dateInputContainer);
  addNewTodo.appendChild(descriptionInputContainer);
  addNewTodo.appendChild(inputButtonsContainer);

  // add to fragment

  addNewTodoFragment.appendChild(addNewTodo);

  // logic for submit
  const inputSubmitFunction = () => {
    inputSubmitButton.disabled = true;
    createToDo(titleInput.value, dateInput.value, descriptionInput.value);
    clearPopups();
    console.log("called submit");
    populateTodos();
  };

  inputSubmitButton.addEventListener("click", () => inputSubmitFunction());

  return addNewTodoFragment;
};

export { createAddNewTodoFragment };
