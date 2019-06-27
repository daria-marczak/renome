import { combineReducers } from 'redux';
import blogReducer from '../components/blog/logic/blogReducers';

export default combineReducers({
  blog: blogReducer,
});
