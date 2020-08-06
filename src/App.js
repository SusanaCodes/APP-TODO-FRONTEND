import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header/Header";
import TaskCount from "./TaskCount";
import Task from "./Task/Task";
import AddNewTask from "./NewTask/AddNewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://y1c8m3wrt8.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then((response) => {
        console.log("Success", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const deleteTask = (id) => {
    axios
      .delete(
        `https://y1c8m3wrt8.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`
      )
      .then((response) => {
        const filteredTasks = tasks.filter((task) => {
          return task.TaskId !== id;
        });
        setTasks(filteredTasks);
      })
      .catch((err) => {
        console.log("Api error", err);
      });
  };

  const markTaskComplete = (id) => {
    axios
      .put(
        `https://y1c8m3wrt8.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`,
        { Completed: true }
      )
      .then((response) => {
        console.log("updated", response);

        const newTasks = tasks.map((task) => {
          if (task.TaskId === id) {
            task.Completed = 1;
          }
          return task;
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log("Error updating Task", err);
      });
  };

  const addNewTask = (text, date, urgent) => {
    axios
      .post(
        "https://y1c8m3wrt8.execute-api.eu-west-1.amazonaws.com/dev/tasks",
        {
          Description: text,
          DueDate: date,
          Urgent: urgent,
        }
      )
      .then((response) => {
        const newTask = response.data;
        console.log("saved", response);
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log("Error creating task", err);
      });
  };

  return (
    <div className="App">
      <Header />

      <main>
        <TaskCount count={tasks.length} />

        <div className="container">
          {/* <AddNewTask addNewTaskFunc={addNewTask} /> */}

          {tasks.map(function (tasks) {
            return (
              <Task
                key={tasks.TaskId}
                deleteTaskFunc={deleteTask}
                markCompleteFunc={markTaskComplete}
                text={tasks.Description}
                urgent={tasks.Urgent}
                completed={tasks.Completed}
                dueDate={tasks.DueDate}
                id={tasks.TaskId}
              />
            );
          })}
        </div>

        <div className="addingTask">
          <AddNewTask addNewTaskFunc={addNewTask} />
        </div>
      </main>
    </div>
  );
}

export default App;
