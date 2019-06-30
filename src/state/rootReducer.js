import { combineReducers } from 'redux';
import blogReducer from '../components/blog/logic/blogReducers';
import shopReducer from '../components/shop/logic/shopReducer';

export default combineReducers({
  blog: blogReducer,
  shop: shopReducer,
});
