import React, { Component } from "react";

class Post extends Component {
  componentDidMount() {}

  componentWillMount() {}

  render() {
    const { post } = this.props;

    return (
      <li key={post.id}>
        {post.title}
        {post.body}
      </li>
    );
  }
}

export default Post;
