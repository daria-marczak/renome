import { all } from 'redux-saga/effects';
import { blogSagas } from '../components/blog/logic/blogSagas';
import { shopSagas } from '../components/shop/logic/shopSagas';
import { checkoutSagas } from '../components/checkout/logic/checkoutSagas';
import { cartSagas } from '../components/cart/logic/cartSagas';
import { contactSagas } from '../components/contact/logic/contactSagas';

export default function* root() {
  yield all([
    blogSagas(),
    shopSagas(),
    checkoutSagas(),
    cartSagas(),
    contactSagas(),
  ]);
}
