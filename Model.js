/**
 * @class Model;
 * Intention for this class just only to maintain todo's as a array and store into localstorage in browswer
 * Maintain todo's means that it is responsible for all CRUD operation and sustain todo's array with right operations
 */
class Model {

    constructor() {
        this.todos = localStorage.getItem('todos') 
                    ? JSON.parse(localStorage.getItem('todos')) 
                    : [];
    }

    subscribeTodoListChanged( callback ) {
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
        this.todos = this.todos.filter(todo => todo.id != id);
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

export default Model;