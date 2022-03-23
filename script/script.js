let form = document.getElementById("form");

let taskTitle = document.getElementById("titleInput");

let taskDate = document.getElementById("dateInput");

let taskDescription = document.getElementById("descriptionInput");

let message = document.getElementById("msg");

let tasks = document.getElementById("addedTasks");

let addButton = document.getElementById("addButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  taskValidation();
});

let taskValidation = () => {
  if (taskTitle.value === "") {
    message.innerHTML = "Title cannot be empty!";
  } else {
    message.innerHTML = "";
    acceptData();
    addButton.setAttribute("data-bs-dismiss", "modal");
    addButton.click();
    (() => {
      addButton.setAttribute("data-bs-dismiss", "");
    })();
  }
};

//* Store the tasks data
let data = [];

//* Accepting and collecting the data
let acceptData = () => {
  data.push({
    taskTitle: taskTitle.value,
    taskDate: taskDate.value,
    taskDescription: taskDescription.value,
  });

  // * Storing the data in the local
  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  addTask();
};

// * Add/Create task
let addTask = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
        <span class='fw-bold'>${x.taskTitle}</span>
        <span class='small text-secondary'>${x.taskDate}</span>
            <p>${x.taskDescription}</p>
        <span class="options">
            <i title='Edit' class='fas fa-edit' onClick='editTask(this)' data-bs-toggle="modal" data-bs-target="#form"></i>
            <i title='Delete' class='fas fa-trash-alt' onClick='deleteTask(this); addTask()'></i>
        </span>
    </div>`);
  });
  resetFields();
};

// * Reset the input fields
let resetFields = () => {
  taskTitle.value = "";
  taskDate.value = "";
  taskDescription.value = "";
};

// * Update Task
let editTask = (event) => {
  let selectedTask = event.parentElement.parentElement;

  taskTitle.value = selectedTask.children[0].innerHTML;
  taskDate.value = selectedTask.children[1].innerHTML;
  taskDescription.value = selectedTask.children[2].innerHTML;

  deleteTask(event);
};

//* Delete Task
let deleteTask = (event) => {
  event.parentElement.parentElement.remove();
  data.splice(event.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

// * Get the data from the local storage to the data rray
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  addTask();
  console.log(data);
})();
