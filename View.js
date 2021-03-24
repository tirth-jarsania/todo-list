/**
 * @class View
 * This class is a a visual representation of the model
 * Like this class sense some of the event and give back to response to the controller class
 */
class View {
    constructor() {
        this.app = this.getElement('#root');
        this.title = this.getElement('#header-title')
        this.form = this.getElement('form');
        this.input = this.getElement('input');
        this.todoList = this.getElement('#task')
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
        if (todos.length === 0) {
          const p = this.createElement('p')
          p.textContent = 'Nothing to do! Add a task?'
          this.todoList.append(p)
        } else {
          // Create nodes
          todos.forEach(todo => {
            const li = this.createElement('li')
            li.id = todo.id;
            li.innerHTML = `<span class="delete">x</span>`;
            if(todo.done){
                li.innerHTML += `<input type="checkbox" checked>
                                <label class="line--done">
                                ${todo.item}
                                </label>`;
            }
            else{
                li.innerHTML += `<input type="checkbox">
                                <label>
                                ${todo.item}
                                </label>`;
            }
            this.todoList.append(li)
          })
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
          if (event.target.className === 'delete') {
            const id = event.target.parentElement.id
            handler(id)
          }
        })
    }

    subscribeToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
          if (event.target.type === 'checkbox') {
            const id = event.target.parentElement.id
            handler(id)
          }
        })
    }
}

export default View;