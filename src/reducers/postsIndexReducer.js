import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
