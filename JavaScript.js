
projectList = [];

Task = function(){
    this.name;
    this.priority;
    this.dueDate;
    this.project;
    this.done;
    this.spot = 0;
        	
}

TaskList = function () {
    var tasks = [];
    this.name;
    this.rank;
    this.finished;

    this.getTasks = function () {
        return tasks;
    }

    this.addTask = function (newTask) {
        tasks.push(newTask);
        newTask.spot = tasks.length - 1;
    }

    this.removeTask = function (task) {
        tasks.splice(task.spot, 1);
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].spot = i;
        }
    }

    this.saveAll = function () {
        res = [];
        var i;

        for (i = 0; i < tasks.length; i++) {
            if (!tasks[i].done) {
                res.push(tasks[i]);
            }
        }
        localStorage.setItem("todoDatabase", JSON.stringify(res));
    }

    this.display = function () {
                
        table = document.querySelector('#' + this.name);

        for (i = 0; i < tasks.length; i++) {
            table.deleteRow();
        }

        headerRow = document.createElement('tr');
        pBox = document.createElement('input');
        pBox.type = 'checkbox';
        pBox.id = this.rank;
        pBox.onclick = projectDone;
        header = document.createElement('th');
        header.innerHTML = this.name;

        table.appendChild(headerRow);
        headerRow.appendChild(pBox);
        headerRow.appendChild(header);

        for (i = 0; i < tasks.length; i++) {
                    
            row = document.createElement('tr');
            taskPlace = document.createElement('td');
            date = document.createElement('td');
                    

            task = tasks[i];
            checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.id = task.spot.toString();
            checkBox.onclick = taskDone;
            checkBox.className = this.rank;
            taskPlace.innerHTML = task.name;
            taskPlace.className = task.priority;
            date.innerHTML = task.dueDate;                    

            table.appendChild(row);
            row.appendChild(checkBox);
            row.appendChild(taskPlace);
            row.appendChild(date);
        }

    }


    this.restoreAll = function () {
        oldList = JSON.parse(localStorage.getItem("todoDatabase"));
        for (i = 0; i < oldList.length; i++) {
            this.addTask(oldList[i]);
        }

        this.display();
    }


}      

taskDone = function () {
    var place = parseInt(this.id);
    var project = projectList[this.className];
    var task = project.getTasks()[place];
    var name = this.nextSibling;
    var date = name.nextSibling;

    if (!task.done) {
        name.style.textDecoration = 'line-through';
        date.style.textDecoration = 'line-through';
        task.done = true;
            
    } else {
        name.style.textDecoration = 'none';
        date.style.textDecoration = 'none';
        task.done = false;
    }
    project.saveAll();
}

addProject = function () {
    project = new TaskList();
    project.name = document.querySelector("#newProject").value;
    newTable = document.createElement('table');
    newTable.id = project.name;

    listSection = document.querySelector('article');
    listSection.appendChild(newTable);

    project.rank = projectList.length;
    projectList.push(project);

    project.display();
    document.querySelector('#newProject').value = "";

    newOption = document.createElement('option');
    newOption.value = project.name;
    newOption.innerHTML = project.name;

    dropMenu = document.querySelector('#project');
    dropMenu.appendChild(newOption);
}

addTask = function () {

    newTask = new Task();

    projectName = document.querySelector('#project').value;
          
    for (var i = 0; i < projectList.length; i++) {
        if (projectList[i].name == projectName) {
            project = projectList[i];
        }
    }

    newTask.name = document.querySelector('#newTask').value;

    newTask.priority = document.querySelector('#priority').value;

    newTask.dueDate = document.querySelector('#date').value;

    newTask.done = false;

    newTask.project = project;

    table = document.querySelector('#' + projectName);       

    project.addTask(newTask);
    console.log(project);

    project.display();

    document.querySelector('#newTask').value = "";
    project.saveAll();
}

initialize = function () {
    init = new TaskList();
    init.name = 'Misc';
    init.rank = 0;
    projectList.push(init);

    init.display();
}