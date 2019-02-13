// query selectors
let input = document.querySelector("#input");
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
  let btn = document.createElement("BUTTON");
  btn.addEventListener("click", remove(btn));
  let btext = document.createTextNode("Remove 🗑️");
  btn.appendChild(btext);
  li.appendChild(btn);
  
  // clear text from input field
  

}

submit.addEventListener("click", () => {
  if (input.value !== "") {
	addtask(input.value);
	input.value.reset();
  } else {
    alert("Please input a task.");
  }
});

function done(li) {
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });
}

function remove(btn) {
  btn.addEventListener("click", function() {
    btn.parentNode.remove();
  });
}
