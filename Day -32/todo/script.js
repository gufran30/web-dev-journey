const body = document.body;
const header = document.querySelector("header");
const todoContainer = document.querySelector(".todo-container");
const addButton = document.querySelector("header button");
const todoInput = document.querySelector(".todo-input");

const todos = document.querySelector(".todos");
const todoData = [];

addButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (todoInput.value.length > 0) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    todos.appendChild(todoDiv);

    const list = document.createElement("li");
    const checkButton = document.createElement("button");
    const trashButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    list.innerText = todoInput.value;
    list.classList.add("todo-item");
    checkButton.classList.add("check-btn");
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(list);
    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(trashButton);

    checkButton.addEventListener("click", function () {
      list.style.textDecoration = "line-through";
      list.style.color = "gray";
    });

    trashButton.addEventListener("click", function () {
      todoDiv.remove();
    });

    todoInput.value = "";

    // console.log(list.innerText)
    todoData.push(list.innerText)
    localStorage.setItem("todoName", JSON.stringify(todoData))

    // Remove existing warning id present
    const existingWarning = document.querySelector("form p.warning");
    if (existingWarning) {
      existingWarning.remove();
    }
  } else {
    // check if a warning paragraph already exists
    const existingWarning = document.querySelector("form p.warning");
    if (!existingWarning) {
      let warning = document.createElement("p");
      warning.classList.add("warning");
      warning.innerText = "Please give input first.";
      warning.style.color = "rgb(173, 2, 2)";
      warning.style.fontFamily = "poppins, sans-serif";
      warning.style.fontWeight = "thin";
      document.querySelector("form").append(warning);
    }
  }
});

function updateClock() {
  let hours = new Date().getHours();
  let mins = new Date().getMinutes();
  const AMorPM = isAm(hours);

  // Convert hours to 12-hour format and handle midnight
  hours = hours % 12 || 12; // Use 12 instead of 0 for midnight/noon
  hours = addLeadingZero(hours);
  mins = addLeadingZero(mins);

  let currentTime = `${hours}:${mins} ${AMorPM}`;
  const clock = document.querySelector("clock span"); // Adjust selector as needed
  clock.innerText = currentTime;
}

// Helper function to determine AM/PM
function isAm(hours) {
  return hours >= 12 ? "PM" : "AM";
}

// Helper function to add leading zero
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Run immediately to avoid initial 1-second delay
updateClock();
