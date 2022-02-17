let form = document.getElementById("form");

let input = document.getElementById("inputArea");

let posts = document.getElementById("posts");

let message = document.getElementById("msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Button clicked!");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    //* REJECT

    message.innerText = "Post cannot be empty.";
    console.log("Failure");
  } else {
    // * ACCEPT

    message.innerText = " ";
    acceptData();
    console.log("Success");
  }
};

//* Store the posts data
let data = {};

// A
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// * Upload post
let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
        <i title='Edit' class="fas fa-edit" onClick="editPost(this)"></i>
        <i title='Delete' class="fas fa-trash-alt" onClick="deletePost(this)" ></i>
    </span>
  </div>
  `;

  // * Reset the textArea input
  input.value = "";
};

// * Delete post
let deletePost = (event) => {
  event.parentElement.parentElement.remove();
}

// * Edit post
let editPost = (event) => {
  // Targeting the <p> and <span> tag of the html
  input.value = event.parentElement.previousElementSibling.innerHTML;
  event.parentElement.parentElement.remove();
}