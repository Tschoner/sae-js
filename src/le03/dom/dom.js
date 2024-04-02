const todoInput = document.getElementById('todo-input');
const searchInput = document.getElementById('search-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', function () {
    const newTodo = todoInput.value;
    if (newTodo) {
        const listItem = document.createElement('li');

        // Wrap the task text in a span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = newTodo;
        listItem.appendChild(taskSpan);

        // Add edit button
        const editButton = document.createElement('button');
        editButton.style.marginLeft = '10px';
        editButton.style.marginRight = '5px';

        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            const newTodo = prompt('Edit your task:', taskSpan.textContent);
            if (newTodo) {
                taskSpan.textContent = newTodo;
            }
        });
        listItem.appendChild(editButton);

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';


        deleteButton.addEventListener('click', function () {
            listItem.parentElement.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        todoInput.value = '';
    } else {
        alert('Please enter a task first!');
    }
});

searchInput.addEventListener('keyup', function () {
    const searchValue = searchInput.value.toLowerCase();
    const listItems = todoList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        const taskSpan = listItems[i].getElementsByTagName('span')[0];
        if (taskSpan.textContent.toLowerCase().includes(searchValue)) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
        }
    }
});
