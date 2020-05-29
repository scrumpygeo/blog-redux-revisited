import reduxBlog from '../apis/reduxBlog';
import { FETCH_POSTS, CREATE_POSTS, FETCH_POST } from './types';

// NB: due to thunk we call the dispatch function manually with the action we want to dispatch.
// instead of the classic return {  type: 'FETCH_POSTS', payload: promise }
export const fetchPosts = () => async (dispatch) => {
  const response = await reduxBlog.get(`posts`);
  // console.log(response);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await reduxBlog.get(`/posts/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data });
};

export const createPost = (formValues) => async (dispatch) => {
  const response = reduxBlog.post('/posts', formValues);
};
