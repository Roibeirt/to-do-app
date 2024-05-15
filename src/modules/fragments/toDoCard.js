const createTodoFragment = (title, date, description) => {
  const todoCardFragment = new DocumentFragment();

  const todoCard = document.createElement("div");
  todoCard.classList = "todo-card";

  // card header elements
  const todoHeader = document.createElement("div");
  todoHeader.classList = "todo-header";
  const todoTitle = document.createElement("div");
  todoTitle.classList = "todo-title";
  todoTitle.textContent = title;
  const todoClose = document.createElement("button");
  todoClose.classList = "todo-close";

  // card header structure
  todoHeader.appendChild(todoTitle);
  todoHeader.appendChild(todoClose);

  // card body elements
  const todoDate = document.createElement("div");
  todoDate.classList = "todo-date";
  todoDate.textContent = date;

  const todoDescription = document.createElement("div");
  todoDescription.classList = "todo-description";
  todoDescription.textContent = description;

  const todoMore = document.createElement("div");
  todoMore.classList = "todo-more";
  todoMore.textContent = "...";

  // card structure
  todoCard.appendChild(todoHeader);
  todoCard.appendChild(todoDate);
  todoCard.appendChild(todoDescription);
  todoCard.appendChild(todoMore);

  // add to card fragment
  todoCardFragment.appendChild(todoCard);

  return todoCardFragment;
};

export { createTodoFragment };
