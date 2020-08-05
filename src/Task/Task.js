import React from "react";
import moment from "moment";
import "./Task.css";

const Task = (props) => {
  const handleDeleteClick = () => {
    props.deleteTaskFunc(props.id);
  };

  const handleCompleteClick = () => {
    props.markCompleteFunc(props.id);
  };

  return (
    <div className="row">
      <div className="col 12 col- md-4"> {props.text}</div>

      <div className="col-6 col-md -2 ">
        {props.urgent === 1 ? "URGENT" : ""}
      </div>

      <div className="col-6 col-md -2 ">
        {" "}
        {moment(props.dueDate).format("ddd Do MMM YYYY")}
      </div>

      <div className="col-6 col-md -2 ">
        {props.completed === 0 && (
          <button className="btn btn-primary" onClick={handleCompleteClick}>
            Mark as completed
          </button>
        )}
      </div>

      <div className="col-6 col-md -2 ">
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
