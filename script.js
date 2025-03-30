document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');

    // Create a new list item for the task
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText} <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input after adding a task
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove(); // Remove the task item from the list
}
