// MVC based todo-app
import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

const App = () => new Controller(new Model(), new View());

export default App;


