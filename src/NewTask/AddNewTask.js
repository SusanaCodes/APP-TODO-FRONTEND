import React from "react";

function AddNewTask() {
  return (
    <div className="row" mb-4>
      <div className="col-4">
        <input type="text" className="form-control" />
      </div>

      <div className="col-4">
        <input type="date" className="form-control" />
      </div>

      <div className="col-2">
        <input
          type="checkbox"
          className="form-check_input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="urgentCheck">
          Urgent
        </label>
      </div>
      <div className="col-2">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}

export default AddNewTask;
