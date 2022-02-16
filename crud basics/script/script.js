let form = document.getElementById("form");

let input = document.getElementById("inputArea");

let message = document.getElementById("msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Button clicked!");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    message.innerText = "Post cannot be empty.";
    console.log("Failure");
  } else {
    message.innerText = " ";
    console.log("Success");
  }
};
