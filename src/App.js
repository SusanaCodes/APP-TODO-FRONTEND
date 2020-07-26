import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import TaskCount from "./TaskCount";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Do your app",
      completed: false,
      dueDate: "2020-26-7",
      urgent: true,
    },
    {
      text: "Finish FM course",
      completed: true,
      dueDate: "2020-01-8",
      urgent: false,
    },
    {
      text: "Do github course",
      completed: false,
      dueDate: "2020-05-08",
      urgent: false,
    },
    {
      text: "Review notes from TR",
      completed: false,
      dueDate: "2020-26-7",
      urgent: true,
    },
    {
      text: "Doctor appointment",
      completed: false,
      dueDate: "2020-27-7",
      urgent: true,
    },
  ]);

  return (
    <div className="App">
      <Header />

      <main>
        <TaskCount count={tasks.length} />

        <div className="container">
          {tasks.map(function (tasks) {
            return (
              <Task
                text={tasks.text}
                urgent={tasks.urgent}
                completed={tasks.completed}
                dueDate={tasks.dueDate}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
