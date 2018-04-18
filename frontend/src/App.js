import React, { Component } from "react";
import PostList from "./components/post/PostList";
import { connect } from 'react-redux'
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  render() {
    const {posts} = this.state;

    return (
      <div className="App">
        <header>Nav here!</header>
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

export default connect(
  mapStateToProps
)(App);
