import React from "react";
import "./TaskCount.css";

function TaskCount(props) {
  return (
    <p>
      <button type="button" class="block">
        You have{" "}
        <mark class="red">
          <b>{props.count}</b>
        </mark>{" "}
        outstanding tasks
      </button>
    </p>
  );
}

export default TaskCount;
