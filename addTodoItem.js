function createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
}
const addTodoItem = (event) =>{
    const todoDiv = createElement('div','todo');
    todoDiv.id = event.detail.id;

    const newTodo = createElement('li','todo-item');
    newTodo.innerText = event.detail.item;
    todoDiv.appendChild(newTodo);

    const completedButton = createElement('button', 'complete-btn');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    if(event.detail.done === true) 
    {
      todoDiv.classList.add('completed');
      //console.log('tirth');
    }
    todoDiv.appendChild(completedButton);

    
    const trashButton = createElement('button', 'trash-btn');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);
    
    event.detail.arr.appendChild(todoDiv); 
};

export default addTodoItem;