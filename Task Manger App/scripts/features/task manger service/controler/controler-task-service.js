import Task from "../model/model.js";

window.addEventListener('load', taskButton);
const takeTaskInput = () =>{
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#desc").value;
    const dueDate = document.querySelector("#due-date").value;
    // const Priority = document.querySelector("#Priority").value;
    const task = new Task(title,desc,dueDate,);
    console.log(task);

}
function taskButton(){
    document.querySelector("#addBtn").addEventListener('click', takeTaskInput);
}

