export const clearList = () => {
    (document.getElementById('task').innerHTML = '');
    let container = document.querySelector('ul');
    container.parentNode.style.display = "none";
}