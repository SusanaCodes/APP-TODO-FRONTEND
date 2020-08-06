import React from "react";
import "./Header.css";
import moment from "moment";

function Header() {
  return (
    <header>
      {/* <h1>My todo list</h1>

      <h5>
        "The shorter way to do many things is to only do one thing at a time."
      </h5>
      <div className="currentTime">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </div> */}
      <div class="card text-center">
        {/* <div class="card-header">Featured</div> */}
        <div class="card-body">
          <h1 class="card-title">My todo list</h1>
          <p class="card-text">
            "The shorter way to do many things is to only do one thing at a
            time."
          </p>
          {/* <button type="button" class="btn btn-outline-secondary">
            Go somewhere
          </button> */}
        </div>
        <div class="card-footer text-muted">
          <div className="currentTime">
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
