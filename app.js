//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', deleteCheck);



// Functions

function addTodo(event) {
    // Prevent submit
    event.preventDefault();
    
    // Todo DIV
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");
    
    // Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

    //Check button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completed-button')
    todoDiv.appendChild(completedButton);

    //Check trash button
    const trashdButton = document.createElement('button')
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashdButton.classList.add('trash-button')
    todoDiv.appendChild(trashdButton);

    //Append List (finish div part)
    todoList.appendChild(todoDiv)

    // Clear the todoInput field after type
    todoInput.value="";
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE
    if(item.classList[0] === 'trash-button') {
        const todo = item.parentElement
        todo.remove();
    }

    //COMPLETED check
    if(item.classList[0] === 'completed-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

