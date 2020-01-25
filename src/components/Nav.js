import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h2>Student Management</h2>
        </Link>
        <ul className="navbar-nav ml-auhref">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {" "}
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
