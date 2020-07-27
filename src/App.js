import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import TaskCount from "./TaskCount";
import Task from "./Task/Task";
import AddNewTask from "./NewTask/AddNewTask";

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
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };

  const markTaskComplete = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addNewTask = (text, date, urgent) => {
    const newTask = {
      text: text,
      date: date,
      urgent: urgent,
      completed: false,
      id: Math.random() * 1000,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />

      <main>
        <TaskCount count={tasks.length} />

        <div className="container">
          <AddNewTask addNewTaskFunc={addNewTask} />

          {tasks.map(function (tasks) {
            return (
              <Task
                key={tasks.id}
                deleteTaskFunc={deleteTask}
                markCompleteFunc={markTaskComplete}
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
