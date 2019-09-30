import React from "react";
import "./form.css";
import db from "../../utils/DexieDb";

const uuidv4 = require("uuid/v4");

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    content: "",
    imgURL: ""
  };

  addTask = () => {
    const taskObj = {};
    taskObj.id = uuidv4();
    taskObj.title = this.state.title;
    taskObj.author = this.state.author;
    taskObj.content = this.state.content;
    taskObj.imgURL = this.state.imgURL;
    console.log(taskObj);

    // adding data to db
    db.open();
    db.posts.add(taskObj);

    this.props.addPost(taskObj);
    this.props.formToggle();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const formStatus = this.props.formStatus,
      formToggle = this.props.formToggle;

    if (formStatus === true) {
      return (
        <div className="form-container">
          <h2 className="form-header">Add Post</h2>
          <label htmlFor="form-title">
            <b>Title</b>
          </label>
          <input
            id="form-title"
            type="text"
            placeholder="Enter Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="form-author">
            <b>Author</b>
          </label>
          <input
            id="form-author"
            type="text"
            placeholder="Enter Author"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="form-content">
            <b>Content</b>
          </label>
          <input
            id="form-content"
            type="text"
            placeholder="Enter content"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="form-img">
            <b>image URL</b>
          </label>
          <input
            id="form-img"
            type="text"
            placeholder="Enter image URL"
            name="imgURL"
            value={this.state.imgURL}
            onChange={this.handleChange}
          />
          <button className="submit-btn" onClick={() => this.addTask()}>
            Submit
          </button>
          <button className="cancel-btn" onClick={() => formToggle()}>
            Cancel
          </button>
        </div>
      );
    }
  }
}

export default Form;
