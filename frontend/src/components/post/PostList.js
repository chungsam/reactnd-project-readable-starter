import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div>
      <h3>Posts</h3>
      <ul>{posts !== null && posts.map(post => <Post post={post} />)}</ul>
    </div>
  );
}
