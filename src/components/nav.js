import React from "react";
import { Link, a, Router } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h2>Student Management</h2>
        </a>
        <ul className="navbar-nav ml-auhref">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              {" "}
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              {" "}
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
