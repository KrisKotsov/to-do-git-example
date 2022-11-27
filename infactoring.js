const addToDoBtn = document.getElementById("add-to-do-btn");
const toDoInput = document.getElementsByTagName("input")[0];
const toDoContainer = document.querySelector("#todos-container");
const toDoContainerInProgress = document.getElementById("to-do-container-in-progress");
const toDoContainerDone = document.getElementById("to-do-container-done");

let toDos = [];

function addToDo() {
    const validText = toDoInput.value.trim();
    if (validText) {
        const newToDoObject = {
            text: validText,
            completed: false,
        };
        toDos.push(newToDoObject);
        renderToDos();
        toDoInput.value = "";
    } else {
        alert("Please type in some text");
    }
}
function renderToDos() {
    toDoContainerInProgress.innerHTML = "";
    toDoContainerDone.innerHTML = "";
    toDos.forEach((todo) => {
        const newToDoEL = createToDoElement(todo);
        toDoContainerInProgress.appendChild(newToDoEL);
    });
}

function createToDoElement(toDoObj) {
    const divElement = document.createElement("div");
    divElement.classList.add("to-do-instance");

    const pElement = document.createElement("p");
    pElement.textContent = toDoObj.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        toDos = toDos.filter((el) => el.text !== toDoObj.text);
        divElement.remove();
    });

    const checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = toDoObj.completed;
    checkBox.addEventListener("click", () => {
        toDoObj.completed = !toDoObj.completed;
        if (toDoObj.completed) {
            toDoContainerDone.appendChild(divElement);
        } else {
            toDoContainerInProgress.appendChild(divElement);
        }
    });

    divElement.appendChild(pElement);
    divElement.appendChild(checkBox);
    divElement.appendChild(deleteBtn);

    return divElement;
}

addToDoBtn.addEventListener("click", addToDo);
toDoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addToDo();
    }
});

console.log('something else');