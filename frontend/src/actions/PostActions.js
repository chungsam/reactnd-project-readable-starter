import { ADD_POST } from "../actions";

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}
