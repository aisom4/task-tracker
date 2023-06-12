// const express = require("express");
// const app = express();

// const bodyParser = require("body-parser");
// const https = require("https");

//fs.writeFile

//   *Overview*
// Create a task tracker application from scratch using HTML, CSS, and JavaScript. Then, incorporate Node.js to add tasks, edit tasks, save tasks, and delete tasks. The application should support task lists, to-do lists, and shopping lists.

// *Requirements*

// Develop the application to be tablet and mobile responsive.
// Include a ReadMe file that describes the process of building the application. Also, include a section on any errors encountered during development and how they were resolved.
// Implement JavaScript validation to ensure that users enter valid input.
// Store user data in a local file, which can be in JSON or TXT format. The application should read all tasks from the file and display them to the user. Additionally, it should support deleting a task from the file, updating a task in the file, and inserting a new task into the file. Utilize the file system (FS) module provided by Node.js for this purpose.
// Application should have a local machine server
// The Task Tracker Application must be deployed (can be netlify or aws amplify  ).

//----------------------------BEGINNING OF PROJECT-----------------------------

window.addEventListener("load", () => {
  //an eventListener is added for the load of the page
  const form = document.querySelector("#taskForm"); //selecting the form from the html
  const input = document.querySelector("#newInput"); //same for input
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    //an event listener is added for the submit button
    e.preventDefault();

    const task = input.value;
    const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");
    const taskContentItem = document.createElement("div");
    taskContentItem.classList.add("taskContent");

    taskItem.appendChild(taskContentItem);

    const taskInputItem = document.createElement("input");

    taskInputItem.classList.add("text");
    taskInputItem.type = "text";
    taskInputItem.value = task;
    taskInputItem.setAttribute("readonly", "readonly");

    taskContentItem.appendChild(taskInputItem);

    const taskActions = document.createElement("div");
    taskActions.classList.add("manage");

    const taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.innerHTML = "Edit";

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("delete");
    taskDelete.innerHTML = "Delete";

    taskActions.appendChild(taskEdit); //adding the edit task element
    taskActions.appendChild(taskDelete); //adding the delete task element

    taskItem.appendChild(taskActions);

    list.appendChild(taskItem);

    input.value = ""; //a blank value for user to ender

    taskEdit.addEventListener("click", (e) => {
      //listening for a click
      if (taskEdit.innerHTML.toLowerCase() == "edit") {
        taskEdit.innerText = "Save";
        taskInputItem.removeAttribute("readonly");
        taskInputItem.focus();
      } else {
        taskEdit.innerText = "Edit";
        taskInputItem.setAttribute("readonly", "readonly");
      }
    });

    taskDelete.addEventListener("click", (e) => {
      list.removeChild(taskItem);
    });
  });
});
