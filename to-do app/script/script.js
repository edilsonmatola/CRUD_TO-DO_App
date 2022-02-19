let form = document.getElementById("form");

let taskTitle = document.getElementById("titleInput");

let taskDate = document.getElementById("dateInput");

let descriptionTask = document.getElementById("descriptionInput");

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
    addButton.setAttribute("ata-bs-dismiss", "modal");
    addButton.click();
    (() => {
      addButton.setAttribute("ata-bs-dismiss", "");
    })();
  }
};

//* Store the tasks data
let data = {};

//* Accepting and collecting the data
let acceptData = () => {
  data["taskTitle"] = taskTitle.value;
  data["taskDate"] = taskDate.value;
  data["taskDescription"] = descriptionTask.value;
  console.log(data);
  addTask();
};

// * Add/Create task
let addTask = () => {
  tasks.innerHTML += `
    <div>
        <span class='fw-bold'>${data.taskTitle}</span>
        <span class='small text-secondary'>${data.taskDate}</span>
            <p>${data.taskDescription}</p>
        <span class="options">
            <i title='Edit' class='fas fa-edit' onClick='editTask(this)' data-bs-toggle="modal" data-bs-target="#form"></i>
            <i title='Delete' class='fas fa-trash-alt' onClick='deleteTask(this)'></i>
        </span>
    </div>`;

  // * Reset the input fields
  taskTitle.value = "";
  taskDate.value = "";
  descriptionTask.value = "";
};

// * Update Task
let editTask = (event) => {
  let selectedTask = event.parentElement.parentElement;

  taskTitle.value = selectedTask.children[0].innerHTML
  taskDate.value = selectedTask.children[1].innerHTML;
  taskDescription.value = selectedTask.children[2].innerHTML;

  selectedTask.remove();

};

//* Delete Task
let deleteTask = (event) => {
  event.parentElement.parentElement.remove();
};
