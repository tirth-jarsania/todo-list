export const tickTask = elem => {
    const task = elem.target.nextSibling;
    if(elem.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#000000";
        task.style.lineColor = "#ff0000"
    }
    else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}