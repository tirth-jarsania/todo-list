import { addTask } from './addTask.js'; 
export const submit = elem => {
    elem.preventDefault();
    let ip = document.querySelector('input');
    if(ip != ''){
        addTask(ip.value);
    }
    ip.value ='';
};