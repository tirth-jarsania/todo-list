import Model from './Model.js'
import View from './View.js'
import Controller from './Controller.js'

const todoMain = () => {
    const app = new Controller(new Model(), new View());
}

export default todoMain;