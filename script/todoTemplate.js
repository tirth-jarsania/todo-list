import {Id} from './todoId.js';

export const todoTemplate = `<div class="${Id.container}">
<h1 class="${Id.header}">TO-DO LIST BASIC</h1>
<form action="index.html" method="post" autocomplete="off">
  <input type="text" placeholder="add new task" name="task">
  <button type="submit">Add</button>
</form>
<div class="${Id.addtask}">
  <ul id="${Id.task}"></ul>
  <a id="${Id.clear}">Clear</a>
</div>
</div>`; 
