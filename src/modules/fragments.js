// HTML Fragments

// todo card fragment
const todoCardFragment = new DocumentFragment();

const todoCard = document.createElement("div");
todoCard.classList="todo-card";

// card header elements
const todoHeader = document.createElement("div");
todoHeader.classList="todo-header";
const todoTitle = document.createElement("div");
todoTitle.classList = "todo-title";
const todoClose = document.createElement("button");
todoClose.classList = "todo-close";

// card header structure
todoHeader.appendChild(todoTitle);
todoHeader.appendChild(todoClose);

// card body elements
const todoDate = document.createElement("div");
todoDate.classList = "todo-date";

const todoDescription = document.createElement("div");
todoDescription.classList = "todo-description";

const todoMore = document.createElement("div");
todoMore.classList = "todo-more";
todoMore.textContent = "...";

// card structure
todoCard.appendChild(todoHeader);
todoCard.appendChild(todoDate);
todoCard.appendChild(todoDescription);
todoCard.appendChild(todoMore)

// add to card fragment
todoCardFragment.appendChild(todoCard);

// 
// 

// todo-popup fragment
const todoPopupFragment = new DocumentFragment();

const todoPopup = document.createElement("div");
todoPopup.id = "todo-popup";

// popup header elements
const popupHeader = document.createElement("div");
popupHeader.id = "popup-header";
const popupClose = document.createElement("button");
popupClose.id = "popup-close";

// popup header structure
popupHeader.appendChild(popupClose);

// popup title elements
const popupTitle = document.createElement("div");
popupTitle.id = "popup-title";
const popupTitleText = document.createElement("div");
popupTitleText.id = "popup-title-text";
const popupTitleEditField = document.createElement("div");
popupTitleEditField.classList = "popup-edit";
popupTitleEditField.textContent = "...";

// popup title structure
popupTitle.appendChild(popupTitleText);
popupTitle.appendChild(popupTitleEditField);

// popup date elements
const popupDate = document.createElement("div");
popupDate.id = "popup-date";
const popupDateText = document.createElement("div");
popupDateText.id = "popup-date-text";
const popupDateEditField = document.createElement("div");
popupDateEditField.classList = "popup-edit";
popupDateEditField.textContent = "...";

// popup date structure
popupDate.appendChild(popupDateText);
popupDate.appendChild(popupDateEditField);

// popup description elements
const popupDescription = document.createElement("div");
popupDescription.id = "popup-description";
const popupDescriptionText = document.createElement("div");
popupDescriptionText.id = "popup-description-text";
const popupDescriptionEditField = document.createElement("div");
popupDescriptionEditField.classList = "popup-edit";
popupDescriptionEditField.textContent = "...";

// popup description structure
popupDescription.appendChild(popupDescriptionText);
popupDescription.appendChild(popupDescriptionEditField);

// popup structure
todoPopup.appendChild(popupHeader);
todoPopup.appendChild(popupTitle);
todoPopup.appendChild(popupDate);
todoPopup.appendChild(popupDescription);

// add to fragment
todoPopupFragment.appendChild(todoPopup)

// 
// 

// add-new-todo popup

// add-new fragment
const addNewTodoFragment = new DocumentFragment();

const addNewTodo = document.createElement("div");

// factory for input containers
const inputContainerCreator = () => {
    const inputContainerDiv = document.createElement("div");
    inputContainerDiv.classList = "input-container";
    return(inputContainerDiv);
}

// factory for input labels
const labelCreator = (labelfor, labeltext) => {
    const inputLabel = document.createElement("label");
    inputLabel.htmlFor = labelfor;
    inputLabel.textContent = labeltext;
    return(inputLabel);
}

// factory for inputs
const inputCreator = (inputType, inputName, inputId) => {
    const newInput = document.createElement("input");
    newInput.type = inputType;
    newInput.name = inputName;
    newInput.id = inputId;
    return(newInput);
}

// title elements

const titleInputContainer = inputContainerCreator();
const titleLabel = labelCreator("todo-title-input", "Title:");
const titleInput = inputCreator("text", "todo-title-input", "todo-title-input");

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
const descriptionLabel = labelCreator("todo-description-input", "Description:");
const descriptionInput = document.createElement("textarea");
descriptionInput.name = "todo-description-input";
descriptionInput.id = "todo-description-input";
descriptionInput.rows = "8";
descriptionInput.cols = "20";

// description structure
descriptionInputContainer.appendChild(descriptionLabel);
descriptionInputContainer.appendChild(descriptionInput);

// add-new-popup structure
addNewTodo.appendChild(titleInputContainer);
addNewTodo.appendChild(dateInputContainer);
addNewTodo.appendChild(descriptionInputContainer);

// add to fragment

addNewTodoFragment.appendChild(addNewTodo);

export {todoCardFragment, todoPopupFragment, addNewTodoFragment};

