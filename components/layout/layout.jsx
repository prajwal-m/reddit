import React, { Component } from "react";

import Navbar from "../Navbar/navbar";
import Form from "../Form/form";
import Post from "../post/post";
import db from "../../utils/DexieDb";

export class Layout extends Component {
  state = {
    posts: [
      {
        id: "ee35636a-e89f-495c-8602-b06be94ab8b1",
        title: "spacex",
        author: "elon musk",
        content: `Elon Reeve Musk FRS is a technology entrepreneur, …CEO, and lead designer of SpaceX co-founder, CEO
          Elon Reeve Musk FRS is a technology entrepreneur, …CEO, and lead designer of SpaceX; co-founder, CEO
          Elon Reeve Musk FRS is a technology entrepreneur, …CEO, and lead designer of SpaceX; co-founder, CEO`,
        imgURL:
          "https://asset.barrons.com/public/resources/images/ON-CQ308_BL_Elo_B620_20180817110932.jpg"
      }
    ],
    showForm: false
  };

  renderPost = (individualPost, index) => (
    <Post postData={individualPost} key={index} />
  );
  addPost = taskObj => {
    console.log(taskObj);
    this.setState({ posts: [...this.state.posts, taskObj] });
  };

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };

  render() {
    let formData;
    if (this.state.showForm) {
      formData = (
        <Form
          formStatus={this.state.showForm}
          formToggle={this.toggleForm}
          addPost={this.addPost}
        />
      );
    }
    return (
      <div>
        <Navbar formToggle={this.toggleForm} />
        {formData}
        {this.state.posts.map((individualPost, index) =>
          this.renderPost(individualPost, index)
        )}
      </div>
    );
  }
}

export default Layout;
