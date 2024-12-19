document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get the input values
      const taskDescription = document.getElementById("new-task-description").value;
      const taskPriority = document.getElementById("task-priority").value;
  
      // Create a new list item for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
  
      // Set the priority color
      if (taskPriority === "high") {
        taskItem.style.color = "red";
      } else if (taskPriority === "medium") {
        taskItem.style.color = "orange";
      } else {
        taskItem.style.color = "green";
      }
  
      // Add a delete button to the task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";
  
      // Delete button functionality
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });
  
      // Append the delete button and task to the list
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      // Clear the form input
      form.reset();
    });
  });
  