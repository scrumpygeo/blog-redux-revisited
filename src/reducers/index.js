import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsIndexReducer from './postsIndexReducer';

export default combineReducers({
  posts: postsReducer,
  form: formReducer,
});
