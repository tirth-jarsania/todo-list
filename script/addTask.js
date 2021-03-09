export const addTask = task => {
    let container = document.querySelector('ul');
    let node = document.createElement('li');
    node.innerHTML = `<span class="delete-task">x</span><input type="checkbox"><label>${task}</label>`;
    document.getElementById('task').appendChild(node);
    container.parentNode.style.display = "block";
};