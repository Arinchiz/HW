function createTodoList() {
    const todoListsContainer = document.getElementById('todo-lists-container');
    const todoData = {};

    function renderTasks(todoListId) {
        const todoListElement = document.getElementById(todoListId);
        const tasksContainer = todoListElement.querySelector('.tasks-container');
        tasksContainer.innerHTML = '';

        for (let i = 0; i < todoData[todoListId].tasks.length; i++) {
            const task = todoData[todoListId].tasks[i];

            const taskElement = document.createElement('div');
            taskElement.classList.add('task');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', function () {
                toggleTask(todoListId, i);
            });

            const taskText = document.createElement('div');
            taskText.textContent = task.text;
            taskText.style.textDecoration = task.completed ? 'line-through' : 'none';

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.addEventListener('click', function () {
                editTask(todoListId, i);
            });

            taskElement.appendChild(checkbox);
            taskElement.appendChild(taskText);
            taskElement.appendChild(editButton);

            tasksContainer.appendChild(taskElement);
        }
    }

    function addTask(todoListId, text) {
        const newTask = { text, completed: false };
        todoData[todoListId].tasks.push(newTask);
        renderTasks(todoListId);
    }

    function toggleTask(todoListId, index) {
        todoData[todoListId].tasks[index].completed = !todoData[todoListId].tasks[index].completed;
        renderTasks(todoListId);
    }

    function editTask(todoListId, index) {
        const newText = prompt('Редактировать запись:', todoData[todoListId].tasks[index].text);
        if (newText !== null) {
            todoData[todoListId].tasks[index].text = newText;
            renderTasks(todoListId);
        }
    }

    function clearList(todoListId) {
        const confirmClear = confirm(`Хотите удалить запись"${todoListId}"?`);
        if (confirmClear) {
            todoData[todoListId].tasks.length = 0;
            renderTasks(todoListId);
        }
    }

    function createNewTodoList() {
        const todoListId = 'ToDo List';
        todoData[todoListId] = { tasks: [] };
        renderTodoLists();
    }

    function renderTodoLists() {
        todoListsContainer.innerHTML = '';

        for (const todoListId in todoData) {
            const todoListElement = document.createElement('div');
            todoListElement.classList.add('todo-list');
            todoListElement.id = todoListId;

            const titleElement = document.createElement('h2');
            titleElement.classList.add('list-title');
            titleElement.textContent = todoListId;
            todoListElement.appendChild(titleElement);

            const tasksContainer = document.createElement('div');
            tasksContainer.classList.add('tasks-container');
            todoListElement.appendChild(tasksContainer);

            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введите задание...';
            input.addEventListener('keyup', function (event) {
                if (event.key === 'Enter' && input.value.trim() !== '') {
                    addTask(todoListId, input.value.trim());
                    input.value = '';
                }
            });

            const clearButton = document.createElement('button');
            clearButton.textContent = 'Clear List';
            clearButton.classList.add('secondary');
            clearButton.addEventListener('click', function () {
                clearList(todoListId);
            });

            todoListElement.appendChild(input);
            todoListElement.appendChild(clearButton);

            todoListsContainer.appendChild(todoListElement);

            renderTasks(todoListId);
        }
    }
    createNewTodoList();
}

createTodoList();