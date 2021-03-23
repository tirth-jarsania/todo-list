import {submit,clearList,deleteOrTick} from './EventHandler.js';
import {Id} from './Id.js';

export const App = () => {
  const elem = document.getElementById("root");
  elem.innerHTML = `<div class="${Id.container}">
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
  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById(`${Id.clear}`).addEventListener('click', clearList);
  document.getElementById(`${Id.task}`).addEventListener('click', deleteOrTick);
}