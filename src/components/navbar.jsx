import React from "react"; // imr
// Stateless Functional Component sfc

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalNumberOfCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
