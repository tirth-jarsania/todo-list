import {submit} from './submit.js';
import {clearList} from './clearList.js';
import {deleteOrTick} from './deleteOrTick.js';

export const App = () => {
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.getElementById('task').addEventListener('click',deleteOrTick);
};

