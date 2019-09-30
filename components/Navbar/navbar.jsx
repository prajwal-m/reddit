import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "antd";
import "./navbar.css";
import Button from "../button/Button";

const Navbar = ({ formToggle }) => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            <span>
              <Icon type="reddit" className="reddit-icon" />
              <p className="logo-name">reddit.</p>
            </span>
          </NavLink>
        </li>
        <li>
          <Button buttonText="Add Post" onClick={formToggle} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
