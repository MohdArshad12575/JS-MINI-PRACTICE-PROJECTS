let inpBox = document.querySelector(".task-input");
let addBtn = document.querySelector(".add-btn");
let delBtn = document.querySelectorAll(".delete-btn");
let taskListBox = document.querySelector(".task-list");


function addBtnTrigger() {
    let task = inpBox.value;
    let newTask = document.createElement("div");
    let newDltBtn = document.createElement("button");

    newTask.innerHTML = task;
    newTask.classList.add("task-item");

    newDltBtn.innerHTML = "Delete";
    newDltBtn.classList.add("delete-btn");

    newTask.appendChild(newDltBtn);

    taskListBox.append(newTask);



}


addBtn.addEventListener("click" , addBtnTrigger)
inpBox.addEventListener("keydown" , (e) => {
    if (e.key == "Enter") {
        console.log("button pressed");
        addBtnTrigger();
    }
})


taskListBox.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove()
    }
})

