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
todoPopupFragment.appendChild(todoPopup);
