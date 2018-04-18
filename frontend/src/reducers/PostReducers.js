import {ADD_POST} from '../actions';

export function Post(state, action) {
  // const {....} = action;
  switch(action.type) {
    case ADD_POST: return {
      // Do something
    };
    default: return state;
  }
}
