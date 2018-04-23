import React, { Component } from "react";
import PostList from "./components/post/PostList";
import * as PostsAPI from "./api/PostsAPI";
import { connect } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    PostsAPI.getAll().then(posts => {
      console.log(posts);
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps)(App);
