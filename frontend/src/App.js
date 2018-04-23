import React, { Component } from "react";
import TopNav from "./components/nav/TopNav";
import SideNav from "./components/nav/SideNav";
import PostList from "./components/post/PostList";
import * as PostsAPI from "./api/PostsAPI";
import { connect } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/popper.js/dist/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

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
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-12">
            <TopNav />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SideNav posts={posts} />
          </div>
          <div className="col-md-8">
            <PostList posts={posts} />
          </div>
        </div>
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
