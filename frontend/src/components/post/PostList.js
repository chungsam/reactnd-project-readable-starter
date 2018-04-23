import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div>
      <h2>Posts</h2>
      <ul className="list-group list-group-flush">
        {posts !== null &&
          posts.map(post => <Post post={post} key={post.id} />)}
      </ul>
    </div>
  );
}
