import reduxBlog from '../apis/reduxBlog';

const API_KEY = '?key=asdfsdf';

// NB: due to thunk we call the dispatch function manually with the action we want to dispatch.
// instead of the classic return {  type: 'FETCH_POSTS', payload: promise }
export const fetchPosts = () => async (dispatch) => {
  const response = await reduxBlog.get(`posts/${API_KEY}`);
  //   console.log(response);
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await reduxBlog.get(`/posts/${id}/${API_KEY}`);

  dispatch({ type: 'FETCH_POST', payload: response.data });
};
