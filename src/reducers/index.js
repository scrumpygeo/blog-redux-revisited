import { combineReducers } from 'redux';
import postsIndexReducer from './postsIndexReducer';

export default combineReducers({
  posts: postsIndexReducer,
});
