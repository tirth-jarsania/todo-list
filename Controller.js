
/**
 * @class Controller
 * This class links the user and the system
 * Means user make some events let's assume that user click onto delete button for a specific task then this todo must be deleted 
 * For that firstly we must change our todos array which placed into Model class then we have to reflect onto screen
 * This view part placed at View class so here we have to bind both class. That's work basically happen into this class
 */

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    
        this.onTodoListChanged(this.model.todos)
        this.model.subscribeTodoListChanged(this.onTodoListChanged)
        this.view.subscribeAddTodo(this.handleAddTodo)
        this.view.subscribeDeleteTodo(this.handleDeleteTodo)
        this.view.subscribeToggleTodo(this.handleToggleTodo)

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

  export default Controller;
  