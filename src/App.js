import React from "react";
import "./App.css";
import Header from "./Header/Header";
import TaskCount from "./TaskCount";
import Task from "./Task/Task";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <TaskCount />

        <div className="container">
          <Task text="Do your app" urgent={true} />
          <Task text="Do your app" urgent={true} />
          <Task text="Finish FM course" urgent={false} />
          <Task text="Do github course" urgent={false} />
          <Task text="Review notes from TR" urgent={true} />
          <Task text="Doctor appointment" urgent={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
