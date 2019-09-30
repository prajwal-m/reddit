import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import { NavLink } from "react-router-dom";
import { Icon } from "antd";
import "./viewpost.css";
import db from "../../utils/DexieDb";

class Viewpost extends React.Component {
  
  state = {
    postData:{}
  };

  updateState = data => {
    console.log("inside update state");
    console.log(data);
    this.setState({postData:{...data}});
    console.log("inside state object")
    console.log(this.state.postData);
  }

  componentDidMount = () => {
    console.log("component mounted");
    // const postData =  db.friends.where("key").equals("947030ae-f5e8-4f89-a113-0be9630831be");
    // const postData = db.users.get("947030ae-f5e8-4f89-a113-0be9630831be");
    // console.log(postData);  
   const key = this.props.match.params.id;
   console.log(key,typeof key);
   db.open();
  db.posts.get(key).then(data => {
    console.log(data);
    this.updateState(data);
  });
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
