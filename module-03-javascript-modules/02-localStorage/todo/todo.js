const form = document.querySelector("form");
const todoContainer = document.getElementById("todo-container");
// console.log(todoContainer.children);

// form.onSubmit = (event) => {};
// function handleSubmit(event) {}

const createTodo = (todoText) => {
  const todo = document.createElement("li");
  todo.textContent = todoText;
  todoContainer.prepend(todo);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // # get input value
  const inputValue = event.target["todo-input"].value;

  // # create element
  createTodo(inputValue);
  event.target["todo-input"].value = "";

  // # localStorage
  let todoArray = [];

  if (localStorage.getItem("todos")) {
    const existingTodosJSON = localStorage.getItem("todos");
    const exisitingTodosJavaScript = JSON.parse(existingTodosJSON);
    todoArray = [...exisitingTodosJavaScript];
  }

  todoArray.push(inputValue);
  localStorage.setItem("todos", JSON.stringify(todoArray));
});

window.addEventListener("load", () => {
  if (!localStorage.getItem("todos")) return;

  const existingTodosJSON = localStorage.getItem("todos");
  const exisitingTodosJavaScript = JSON.parse(existingTodosJSON);
  // console.log(exisitingTodosJavaScript);

  exisitingTodosJavaScript.forEach((eachTodo) => {
    createTodo(eachTodo);
  });
});
