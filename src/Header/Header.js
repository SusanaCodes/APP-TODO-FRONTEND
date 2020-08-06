import React from "react";
import "./Header.css";
import moment from "moment";

function Header() {
  return (
    <header>
      <div class="card text-center">
        {/* <div class="card-header">Featured</div> */}
        <div class="card-body">
          <h1 class="card-title">My todo list</h1>
          <p class="card-text">
            "The shorter way to do many things is to only do one thing at a
            time."
          </p>
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
