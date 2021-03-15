import {submit,clearList,deleteOrTick} from './todoHelper.js';
import {todoTemplate} from './todoTemplate.js';
import {root} from './todoDom.js';
import {Id} from './todoId.js';

export const todoMain = () => {
  const elem = root;
  elem.innerHTML = todoTemplate;
  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById(`${Id.clear}`).addEventListener('click', clearList);
  document.getElementById(`${Id.task}`).addEventListener('click', deleteOrTick);
}