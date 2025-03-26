let count = 0;

function createTask(tasks) {
  let taskName = prompt("What is the name of this task?");
  let taskDL = prompt("When is the deadline of this?");
  let taskUrgency = confirm("Is this task urgent? [Click on OK if yes and Cancel if no]");
  let taskImportance = confirm("Is this task important? [Click on OK if yes and Cancel if no]");
  let taskNotes = prompt("Got any additional notes about this task?");
  let taskStatus;
  
  let priorityLevel = "";
  
  if(taskUrgency && taskImportance) {
    priorityLevel = "Urgent, Important";
  } else if(taskUrgency && !taskImportance) {
    priorityLevel = "Urgent, Not Important";
  } else if(!taskUrgency && taskImportance) {
    priorityLevel = "Not Urgent, Important";
  } else if(!taskUrgency && !taskImportance) {
    priorityLevel = "Not Urgent, Not Important";
  }
  
  document.getElementById("tPriority").innerHTML = priorityLevel;
  document.getElementById("tName").innerHTML = taskName;
  document.getElementById("tDate").innerHTML = taskDL;
  document.getElementById("tNotes").innerHTML = taskNotes; 
  
  let table = document.getElementById("table"); //get the id table from the HTML
  let newRow = table.insertRow(-1); 
  
  let num = newRow.insertCell(0);
  let name = newRow.insertCell(1);
  let date = newRow.insertCell(2);
  let priority = newRow.insertCell(3);
  let notes = newRow.insertCell(4);
  let status = newRow.insertCell(5);

  count++;
  
  num.innerHTML = count;
  name.innerHTML = taskName;
  date.innerHTML = taskDL;
  priority.innerHTML = priorityLevel;
  notes.innerHTML = taskNotes;
  
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  //checkbox.classList.add("checkbox");
  status.appendChild(checkbox);

}

function custom() {
  let customize = prompt("What color you you like your background to be?");
  document.body.style.backgroundColor = customize;
}

//collapse/display the buttons for the tasklist
function collapse() {
  let sidebar = document.getElementById("sidebar");
  let table = document.getElementById("contain2");
  let container = document.getElementById("mainContain");
  sidebar.classList.toggle("collapsed");
  table.classList.toggle("expand");
  container.classList.toggle("collapse");
}

//collapse/display the buttons for references
function references() {
  let ref = document.getElementById("references");
  ref.classList.toggle("collapse");
  
}