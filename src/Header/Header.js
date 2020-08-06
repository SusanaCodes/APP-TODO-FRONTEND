import React from "react";
import "./Header.css";
import moment from "moment";

function Header() {
  return (
    <header>
      <h1>My todo list</h1>

      <h5>
        "The shorter way to do many things is to only do one thing at a time."
      </h5>
      <div className="currentTime">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </div>
    </header>
  );
}

export default Header;
