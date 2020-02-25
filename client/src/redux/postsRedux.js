import Axios from 'axios';

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getPosts = ({ posts }) => posts.data;
export const getSinglePost = ({ posts }) => posts.singlePost;
export const getRequest = ({ posts }) => posts.request;

/* ACTIONS */

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

/* ACTION CREATORS */

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: true,
    error: null,
    success: null,
  },
  singlePost: [],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case LOAD_SINGLE_POST: {
      return {
        ...statePart,
        singlePost: action.payload,
      };
    }
    case START_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: true,
          error: null,
          success: null,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: false,
          error: action.error,
          success: false,
        },
      };
    }
    default:
      return statePart;
  }
}

/* THUNKS */

export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await Axios.get(`http://localhost:8000/api/posts`);
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSinglePostRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await Axios.get(`http://localhost:8000/api/posts/${id}`);
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await Axios.post(`http://localhost:8000/api/posts`, post);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
