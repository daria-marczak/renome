import { combineReducers } from 'redux';
import blogReducer from '../components/blog/logic/blogReducers';
import shopReducer from '../components/shop/logic/shopReducer';
import checkoutReducer from '../components/checkout/logic/checkoutReducer';

export default combineReducers({
  blog: blogReducer,
  shop: shopReducer,
  checkout: checkoutReducer,
});
