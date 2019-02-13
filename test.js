// onload, create list
function myFunction() {
  const todo = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

  todo.forEach(element => {
    let todoli = document.createElement("li");
    todoli.addEventListener("click", done());
    let text = document.createTextNode(element);
    todoli.appendChild(text);
    const ol = document.querySelector("#todo-list");
    ol.appendChild(todoli);
  });
}

// add to task list when submitted
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  let hey = document.createElement("li");

  if (input.value !== "") {
    hey.addEventListener("click", done());
    let text = document.createTextNode(input.value);
    hey.appendChild(text);
    const ol = document.querySelector("#todo-list");
    ol.appendChild(hey);
  } else {
    alert("Please input a task.");
  }
});

// change class to done when clicked
let done = function() {
  let tasks = document.querySelectorAll("li");

  tasks.forEach(task => {
    console.log(task);
    task.addEventListener("click", function() {
      task.classList.toggle("done");
    });
  });
};

// const todo = [
//     'buy milk',
//     'eat dinner',
//     'nail javascript',
//     'give feedback',
// ];

// const input = document.querySelector("#input")
// const submit = document.querySelector("#submit")

// // add task function
// const addtask = function() {
//     let li = document.createElement("li");
//     li.addEventListener("click", done());
//     li.addEventListener("click", remove());
//     let text = document.createTextNode(element);
//     li.appendChild(text);
//     const ol = document.querySelector("#todo-list")
//     ol.appendChild(todoli);
// }

// //  initialise list
// todo.forEach(addtask(task));

// submit.addEventListener('click', ()=> {

//       if (input.value !== ""){
//         addtask()
//     }
//     else {
//         alert("Please input a task.")
//     }

// });

// // change class to done when done
// let done = function (){
// let tasks = document.querySelectorAll("li");

//  tasks.forEach(task => {
//     console.log(task)
//     task.addEventListener("click", function(){
//         task.classList.toggle("done")
//     })
//   });
// }
