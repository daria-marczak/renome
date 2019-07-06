import { combineReducers } from 'redux';
import blogReducer from '../components/blog/logic/blogReducers';
import shopReducer from '../components/shop/logic/shopReducer';
import checkoutReducer from '../components/checkout/logic/checkoutReducer';
import cartReducer from '../components/cart/logic/cartReducer';
import contactReducer from '../components/contact/logic/contactReducer';

export default combineReducers({
  blog: blogReducer,
  shop: shopReducer,
  checkout: checkoutReducer,
  cart: cartReducer,
  contact: contactReducer,
});
