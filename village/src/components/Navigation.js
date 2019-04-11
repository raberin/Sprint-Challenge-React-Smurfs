import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
  return (
    <nav className="navigation">
      <NavLink className="navLinks" to="/">
        Home
      </NavLink>
      <NavLink className="navLinks" to="/smurf-form">
        Add-Smurf
      </NavLink>
    </nav>
  );
};

export default Navigation;
