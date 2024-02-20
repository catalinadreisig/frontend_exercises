document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function loadTasks() {
  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = "task";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTaskStatus(task));
    const label = document.createElement("label");
    label.textContent = task.description + (task.quantity ? ` (${task.quantity})` : "");
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    if (task.done) {
      listItem.classList.add("done-task");
      doneList.appendChild(listItem);
    } else {
      todoList.appendChild(listItem);
    }
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const quantityInput = document.getElementById("quantityInput");
  const description = taskInput.value.trim();
  const quantity = parseInt(quantityInput.value.trim()) || 1;

  if (description && quantity > 0) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      done: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    quantityInput.value = "";
    loadTasks();
  }
}

function toggleTaskStatus(task) {
  task.done = !task.done;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.findIndex((t) => t.id === task.id);
  tasks[index] = task;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
