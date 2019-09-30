import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export class Post extends Component {
  render() {
    const postData = this.props.postData;
    return (
      <div className="post-container">
        <img alt="post image" src={postData.imgURL} />
        <span className="title-element">
          {postData.title}-
          <span className="author-element"> {postData.author} </span>
        </span>
        <p className="content-element">{postData.content}</p>
        <Link to={`/posts/${postData.id}`}>
          <button className="view-post">Check Post</button>
        </Link>
      </div>
    );
  }
}

export default Post;
