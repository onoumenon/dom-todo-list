// query selectors
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");

// onload, create default list
function myFunction() {
  const todo = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

  todo.forEach(element => {
    addtask(element);
  });
}

function addtask(element) {
  // create li w text
  let li = document.createElement("li");
  li.addEventListener("click", done(li));
  let text = document.createTextNode(element);
  li.appendChild(text);
  const ol = document.querySelector("#todo-list");
  ol.appendChild(li);
  // create trash icon

  // clear text from input field
 

}

submit.addEventListener("click", () => {
  if (input.value !== "") {
    addtask(input.value);
  } else {
    alert("Please input a task.");
  }
});

function done(li) {
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });
}
