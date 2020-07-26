import React from "react";
import moment from "moment";
import "./Task.css";

function Task(props) {
  return (
    <div className="row">
      <div className="col 12 col- md-4"> {props.text}</div>

      <div className="col-6 col-md -2 ">
        {props.urgent === true ? "URGENT" : ""}
      </div>

      <div className="col-6 col-md -2 ">
        {" "}
        {moment("2020-08-01").format("ddd Do MMM YYYY")}
      </div>

      <div className="col-6 col-md -2 ">
        <button className="btn btn-primary">Mark as completed</button>
      </div>

      <div className="col-6 col-md -2 ">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default Task;
