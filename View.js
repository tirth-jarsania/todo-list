/**
 * @class View
 * This class is a a visual representation of the model
 * Like this class sense some of the event and give back 
 * to response to the controller class
 */

class View {
    constructor() {
        this.form = this.getElement('form');
        this.input = this.getElement('input');
        this.todoList = this.getElement('.todo-list')
        this.todoList.addEventListener("addTodoItem" ,(event) => {
            const todoDiv = this.createElement('div','todo');
            todoDiv.id = event.detail.id;

            const newTodo = this.createElement('li','todo-item');
            newTodo.innerText = event.detail.item;
            todoDiv.appendChild(newTodo);

            const completedButton = this.createElement('button', 'complete-btn');
            completedButton.innerHTML = `<i class="fas fa-check"></i>`;
            if(event.detail.done === true) 
            {
              todoDiv.classList.add('completed');
              //console.log('tirth');
            }
            todoDiv.appendChild(completedButton);

            
            const trashButton = this.createElement('button', 'trash-btn');
            trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
            todoDiv.appendChild(trashButton);
            
            event.detail.arr.appendChild(todoDiv);
          })
    }
    get _todoText() {
        return this.input.value
    }
    _resetInput() {
        this.input.value = ''
    }
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
    }
    getElement(selector) {
        return document.querySelector(selector)
    }

    _deleteTodoList(){
      while (this.todoList.lastChild) {
        this.todoList.removeChild(this.todoList.lastChild)
      }
    }
    displayTodos( todos ) {
        // Delete all nodes
        this._deleteTodoList();
        // Show default message
        if (todos.length) {
          // Create nodes
          todos.forEach(todo => {this.todoList.dispatchEvent(new CustomEvent("addTodoItem",{
              detail:{
                id: todo.id,
                item: todo.item,
                done: todo.done,
                arr: this.todoList,
              }}))})
        }
    }

    subscribeAddTodo(handler) {
        this.form.addEventListener('submit', event => {
          event.preventDefault()
          if (this._todoText) {
            handler(this._todoText)
            this._resetInput()
          }
        })
    }
    
    subscribeDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
          if (event.target.className === 'trash-btn') {
            const id = event.target.parentElement.id
            handler(id)
          }
        })
    }

    subscribeToggleTodo(handler) {
        this.todoList.addEventListener('click', event => {
          if (event.target.className === 'complete-btn') {
            const id = event.target.parentElement.id;
            handler(id)
          }
        })
    }
}

export default View;