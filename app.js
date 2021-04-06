//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);



//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li 
    const newTodo = document.createElement("li");
    newTodo.innerText = 'heyyyy';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //Append To List 
    todoList.appendChild(todoDiv);
}





