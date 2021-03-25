import addTodoItem from './addTodoItem.js';


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
        this.todoList.addEventListener( "addTodoItem" , addTodoItem )
    }
    get _todoText() {
        return this.input.value
    }
    _resetInput() {
        this.input.value = ''
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
        this._deleteTodoList();
        if (todos.length) {
          todos.forEach(todo => {this.todoList.dispatchEvent(new CustomEvent("addTodoItem",{
              detail:{
                id: todo.id,
                item: todo.item,
                done: todo.done,
                arr: this.todoList
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
          else {            
            alert('empty string is not validated')
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