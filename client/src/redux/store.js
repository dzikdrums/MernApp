import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './postsRedux';

// define reducers
const rootReducer = combineReducers({
  posts: postsReducer,
});

// create store
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
