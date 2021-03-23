// MVC based todo-app

class Model {
    constructor() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos'))  : [];
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }
    
    _commit(todos) {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    
    addTodo( task ){
     const todo = {
         id: Date.now(),
         item: task,
         done: false
     }
     this.todos.push(todo);
     this._commit(this.todos)
    }

    deleteTodo( id ){
        this.todos = this.todos.filter(todo =>
            todo.id != id);
        this._commit(this.todos)
    }

    toggleTodo( id ) {
        this.todos = this.todos.map(todo =>
            todo.id != id
            ? todo : {
                id: todo.id,
                item: todo.item,
                done: !todo.done
            });
        this._commit(this.todos)
    }
}

  class View {
    constructor() {
        this.app = this.getElement('#root');
        this.title = this.getElement('#header-title')
        this.form = this.getElement('form');
        this.input = this.getElement('input')
        this.submitButton = this.getElement('button');
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

    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.lastChild) {
          this.todoList.removeChild(this.todoList.lastChild)
        }
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
        bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
          event.preventDefault()
          if (this._todoText) {
            handler(this._todoText)
            this._resetInput()
          }
        })
      }
    
      bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
          if (event.target.className === 'delete') {
            const id = event.target.parentElement.id
            handler(id)
          }
        })
      }
      bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
          if (event.target.type === 'checkbox') {
            const id = event.target.parentElement.id
            handler(id)
          }
        })
      }
  }
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view

    this.model.bindTodoListChanged(this.onTodoListChanged)
    this.view.bindAddTodo(this.handleAddTodo)
    this.view.bindDeleteTodo(this.handleDeleteTodo)
    this.view.bindToggleTodo(this.handleToggleTodo)
    // Display initial todos
    this.onTodoListChanged(this.model.todos)
    }
    onTodoListChanged = todos => {
        this.view.displayTodos(todos)
    }
    handleAddTodo = todoText => {
        this.model.addTodo(todoText)
    }
    handleDeleteTodo = id => {
        this.model.deleteTodo(id)
    }
    handleToggleTodo = id => {
        this.model.toggleTodo(id)
    }
  }
  
  const app = new Controller(new Model(), new View())

