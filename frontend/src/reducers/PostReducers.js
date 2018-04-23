import { ADD_POST } from "../actions";

const initialPostState = {};

export function Post(state = initialPostState, action) {
  // const {....} = action;

  switch (action.type) {
    case ADD_POST:
      return {
        // Do something
      };
    default:
      return state;
  }
}
