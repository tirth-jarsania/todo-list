// submit the task
import {Id} from './todoId.js';

//submit the task
export const submit = e => {
    e.preventDefault();
    let ip = document.querySelector('input');
    if(ip != ''){
        addTask(ip.value);
    }
    ip.value ='';
};
// add the task
function addTask(t) {
    let container = document.querySelector('ul');
    let node = document.createElement('li');
    node.innerHTML = `<span class="delete-task">x</span><input type="checkbox"><label>${t}</label>`;
    document.getElementById('task').appendChild(node);
    container.parentNode.style.display = "block";
};
// clear tasklist
export const clearList = () => {
    (document.getElementById(`${Id.addtask}`).innerHTML = '');
    let container = document.querySelector('ul');
    container.parentNode.style.display = "none";
};
//delete/tick task
export const deleteOrTick = e => {
    if( e.target.className === 'delete-task' )
        deleteTask(e);
    else 
        tickTask(e);
}

//deletetask
function deleteTask(elem) {
    return elem.target.parentNode.parentNode.removeChild(elem.target.parentNode);
}

//ticktask
function tickTask(elem) {
    const task = elem.target.nextSibling;
    if (elem.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#000000";
        task.style.lineColor = "#ff0000";
    }
    else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}