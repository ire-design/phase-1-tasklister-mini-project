document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // Add an event listener to the form
  taskForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting the default way
    event.preventDefault();

    // Get the task description input value
    const newTaskDescription = document.getElementById('new-task-description').value;

    // Create a new list item for the task
    const newTask = document.createElement('li');
    newTask.innerText = newTaskDescription;

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskForm.reset();
  });
});
