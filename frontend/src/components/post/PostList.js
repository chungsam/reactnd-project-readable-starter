import React from "react";

export default function PostList({ posts }) {
  return (
    <div>
      <ul>
        {posts !== null &&
          posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
