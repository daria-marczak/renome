import { takeLatest, put, delay, select } from 'redux-saga/effects';
import * as checkoutActions from './checkoutConstants';

const productSelector = state => state.shop.cartItems;

export function* checkoutSagas() {
  yield takeLatest(checkoutActions.ADD_ORDER_DETAILS.INVOKE, placeOrder);
}

function* placeOrder(action) {
  yield put({ type: checkoutActions.ADD_ORDER_DETAILS.REQUEST });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      const addresses = {
        billingAddress: action.address,
        shippingAddress: action.address,
      };

      const products = yield select(productSelector);

      yield delay(1500);
      yield put({
        type: checkoutActions.CHECKOUT_PRODUCTS.SUCCESS,
        addresses,
        products,
      });
    } else {
      yield put({ type: checkoutActions.CHECKOUT_PRODUCTS.FAILURE });
    }
  } catch (error) {
    yield put({ type: checkoutActions.CHECKOUT_PRODUCTS.FAILURE });
  }
}
