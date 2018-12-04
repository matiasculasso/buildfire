
function loadTasks(taskList){
    let container = document.getElementById('taskContainer');
    container.innerHTML='';

    taskList.forEach((task,i)=>{        
        let divTask = document.createElement('div');
        divTask.className="pure-u-1 pure-u-md-1-3";

        let divTaskContent = document.createElement('div');
        divTaskContent.className = "task-table";

        divTaskContent.innerHTML =`      
            <div class="task-table-header">           
                <h2>${task.title + ' ' + i}</h2>
                <h4>
                    <span>
                        <label for="remember" class="pure-checkbox">                    
                            Completed: <input type="checkbox" ${task.completed?"checked":""} title="check completed">                
                        </label>                    
                    <span>
                </h4>
            </div>
            <ul class="task-table-list">
                <li>Created on: ${formatDate(task.createdOn)}</li>
                <li>Created by: ${task.createdBy}</li>
                <li><p>${task.description}</p></li>
                <li>Due on ${formatDate(task.dueDate)}</li>                
            </ul>
            <div class="task-image">
                ${task.img?"<img src='" + task.img + "' />":""}
            </div>
        `;

         if (!task.completed){
            divTaskContent.innerHTML += `<button class="button-choose pure-button">Complete Task</button>`
         }

         if(task.completed) {
            divTaskContent.classList.add("task-table-done");
         } else if(task.dueDate < Date.now()) {
            divTaskContent.classList.add("task-table-due");
        }
        
        divTask.appendChild(divTaskContent);
        container.appendChild(divTask);     
    });
}


loadTasks(taskList);

function addTask(task){
    task.createdOn = new Date();
    task.dueDate = new Date();
    taskList.unshift(task);
    loadTasks(taskList);
};

function formatDate(date) {
    return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() +" " + date.getHours() +":"+ date.getMinutes();
};