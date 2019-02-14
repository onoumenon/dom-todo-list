let input = document.querySelector("#input");
const submit = document.querySelector("#submit");
let todo = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

// onload, create default list
function myFunction() {
  todo.forEach(task => {
    addtask(task);
  });
}


function addtask(task) {
  // create li for task
  let li = document.createElement("li");
  let span = document.createElement("span");
  li.appendChild(span);
  span.addEventListener("click", done(li));
  let text = document.createTextNode(task);
  span.appendChild(text);
  const ol = document.querySelector("#todo-list");
  ol.appendChild(li);

  // create trash 'x' icon
  let btn = document.createElement("BUTTON");
  btn.addEventListener("click", remove(btn));
  let btext = document.createTextNode("✕");
  btn.appendChild(btext);
  li.appendChild(btn);
}

// addtask on click
submit.addEventListener("click", () => {
  if (input.value) {
    addtask(input.value);
    input.value = "";
  } else return;
});

// strikethrough when done
function done(li) {
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
}

// remove li when trashed
function remove(btn) {
  btn.addEventListener("click", function () {
    btn.parentNode.remove();
  });
}

// submit on keypress 'enter'
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    submit.click();
  }
});