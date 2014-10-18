

Task = function(){
    this.name;
    this.priority;
    this.dueDate;
    this.project;
    this.projectName;
    this.done;
    this.spot = 0;     	
}

TaskList = function () {
    var tasks = [];
    var _this = this;
    _this.name;
    _this.rank;
    _this.finished;

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
    this.display = function () {
                
        table = document.getElementById(_this.name);
        

        if (table.rows.length > 0) {
            for (i = 0; i < tasks.length; i++) {
                table.deleteRow();
            }
        }

        headerRow = document.createElement('tr');
        pBox = document.createElement('input');
        pBox.type = 'checkbox';
        pBox.id = _this.rank;
        pBox.onclick = projectDone;
        header = document.createElement('th');
        header.innerHTML = _this.name;

        table.appendChild(headerRow);
        headerRow.appendChild(pBox);
        headerRow.appendChild(header);

        //table.appendChild(pBox);
        //table.appendChild(header);
        
        header.onclick = function () {
            console.log(_this.getTasks().length);
            for (var i = 0; i < _this.getTasks().length; i++) {
                thisTask = _this.getTasks()[i];
                row = document.querySelector('#' + thisTask.projectName + thisTask.spot.toString());

                if (row.style.display == 'none') {
                    alert('hidden');
                    row.style.display = 'inline';

                } else {
                    row.style.display = 'none';

                }

            }


        }
            

        for (i = 0; i < tasks.length; i++) {
                    
            row = document.createElement('tr');
            //row.className = _this.name;
            //row.style.display = 'none';
            taskPlace = document.createElement('td');
            date = document.createElement('td');
                    

            task = tasks[i];

            row.id = task.projectName + task.spot.toString();
            

            row.style.display = 'none';
            checkBox = document.createElement('input');
            
            checkBox.type = 'checkbox';
            checkBox.id = task.spot.toString();
            checkBox.onclick = taskDone;
            checkBox.className = _this.rank;
            taskPlace.innerHTML = task.name;
            taskPlace.className = task.priority;
            date.innerHTML = task.dueDate;                    

            table.appendChild(row);
            row.appendChild(checkBox);
            row.appendChild(taskPlace);
            row.appendChild(date);
        }

    }

}



saveAll = function () {
    res = [];
    var i;
    var j;
    for (j = 0; j < projectList.length; j++) {
        tasks = projectList[j].getTasks();
        for (i = 0; i < tasks.length; i++) {
            if (!tasks[i].done) {
                res.push(tasks[i]);
            }
        }
    }
    
    localStorage.setItem("todoDatabase", JSON.stringify(res));
}

restoreAll = function () {
    projectList = [];
    oldList = JSON.parse(localStorage.getItem("todoDatabase"));

    var current;
    var project;

    for (i = 0; i < oldList.length; i++) {
        current = oldList[i];
        if (current.spot == 0) {
            
            project = new TaskList();
            project.name = current.projectName;
            project.addTask(current);
            newTable = document.createElement('table');
            newTable.id = project.name;

            listSection = document.querySelector('article');
            listSection.appendChild(newTable);

            project.rank = projectList.length;
            project.finished = false;
            projectList.push(project);
            
            document.querySelector('#newProject').value = "";

            newOption = document.createElement('option');
            newOption.value = project.name;
            newOption.innerHTML = project.name;

            dropMenu = document.querySelector('#project');
            dropMenu.appendChild(newOption);

            project.display();
        } else {
            project = projectList[projectList.length - 1];
            project.addTask(current);
            project.display();
        }
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
    saveAll();
}

projectDone = function () {
    var place = this.id;
    var thisProject = projectList[place];
    var text = this.nextSibling;

    if (!thisProject.finished) {
        text.style.textDecoration = 'line-through';
        thisProject.finished = true;

    } else {
        text.style.textDecoration = 'none';
        thisProject.finished = false;
    }
    saveAll();
}

addProject = function () {
    project = new TaskList();
    project.name = document.querySelector("#newProject").value;
    newTable = document.createElement('table');
    newTable.id = project.name;

    listSection = document.querySelector('article');
    listSection.appendChild(newTable);

    project.rank = projectList.length;
    project.finished = false;
    projectList.push(project);

    project.display();
    document.querySelector('#newProject').value = "";

    newOption = document.createElement('option');
    newOption.value = project.name;
    newOption.innerHTML = project.name;

    dropMenu = document.querySelector('#project');
    dropMenu.appendChild(newOption);

    saveAll();
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

    newTask.projectName = project.name;

    newTask.priority = document.querySelector('#priority').value;

    newTask.dueDate = document.querySelector('#date').value;

    newTask.done = false;

    newTask.project = project;

    table = document.querySelector('#' + projectName);       

    project.addTask(newTask);
    
    project.display();

    document.querySelector('#newTask').value = "";
    saveAll();
}

