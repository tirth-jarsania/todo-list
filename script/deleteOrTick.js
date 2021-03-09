import { deleteTask } from './deleteTask.js';
import { tickTask } from './tickTask.js';

export const deleteOrTick = elem => {
    if( elem.target.className === 'delete-task' )
        deleteTask(elem);
    else 
        tickTask(elem);
}