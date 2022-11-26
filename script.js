const addToDoBtn = document.getElementById("add-to-do-btn");
const toDoInput = document.getElementsByTagName("input")[0];
const toDoContainer = document.querySelector("#todos-container");


function preserveToDos() {
  const allToDos = Array.from(
    document.querySelectorAll(".to-do-instance p")
  ).map((el) => el.textContent);
  window.sessionStorage.setItem("todos", allToDos);
}

function loadToDos() {
  const loadedToDos = window.sessionStorage.getItem("todos").split(",");
  if (loadedToDos && loadedToDos.length > 0) {
    loadedToDos.forEach((toDo) => {
      toDoContainer.appendChild(createToDoElement(toDo));
    });
  }
}

function createToDo(text) {
  const divElement = document.createElement("div");
  divElement.classList.add("to-do-instance");

  const pElement = document.createElement("p");
  pElement.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => divElement.remove());

  divElement.appendChild(pElement);
  divElement.appendChild(deleteBtn);

  toDoContainer.appendChild(divElement);

}

function addToDo() {
  const validText = toDoInput.value.trim();
  if (validText) {
    createToDo(validText);
    toDoInput.value = "";
  }
  else {
    alert("please type in some text");
  }

}

addToDoBtn.addEventListener("click", addToDo)
toDoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToDo();
  }
})


