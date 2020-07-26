import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import TaskCount from "./TaskCount";
import Task from "./Task/Task";
import AddNewTask from "./NewTask/AddNewTask.js";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Do your app",
      completed: false,
      dueDate: "2020-26-7",
      urgent: true,
      id: 1,
    },
    {
      text: "Finish FM course",
      completed: true,
      dueDate: "2020-01-8",
      urgent: false,
      id: 2,
    },
    {
      text: "Do github course",
      completed: false,
      dueDate: "2020-05-08",
      urgent: false,
      id: 3,
    },
    {
      text: "Review notes from TR",
      completed: false,
      dueDate: "2020-26-7",
      urgent: true,
      id: 4,
    },
    {
      text: "Doctor appointment",
      completed: false,
      dueDate: "2020-27-7",
      urgent: true,
      id: 5,
    },
  ]);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <Header />

      <main>
        <TaskCount count={tasks.length} />

        <div className="container">
          <AddNewTask />

          {tasks.map(function (tasks) {
            return (
              <Task
                key={tasks.id}
                deleteTaskFunc={deleteTask}
                text={tasks.text}
                urgent={tasks.urgent}
                completed={tasks.completed}
                dueDate={tasks.dueDate}
                id={tasks.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
