import React, { Component } from "react";

class Post extends Component {
  componentDidMount() {}

  componentWillMount() {}

  render() {
    const { post } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-start flex-column">
        <h6>{post.category}</h6>
        <h5>{post.title}</h5>

        <p>{post.body}</p>
        <span className="badge badge-primary badge-pill">14</span>
      </li>
    );
  }
}

export default Post;
