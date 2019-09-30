import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import { NavLink } from "react-router-dom";
import { Icon } from "antd";
import "./viewpost.css";

class Viewpost extends React.Component {
  componentDidMount = () => {
    console.log("component mounted");
  };

  render() {
    return (
      <div className="hello">
        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                <span>
                  <Icon type="reddit" className="reddit-icon" />
                  <p className="logo-name">reddit.</p>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="post-display">
          <h4>view post</h4>
        </div>
      </div>
    );
  }
}

export default Viewpost;
