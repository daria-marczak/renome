import { takeLatest, put, delay, select } from 'redux-saga/effects';
import * as checkoutActions from './checkoutConstants';
import * as appActions from '../../../appLogic/appConstants';

const productSelector = state => state.cart.cartItems;
const paymentSelector = state => state.checkout.paymentMethod;

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
      const paymentMethod = yield select(paymentSelector);
      yield delay(1500);
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Success! Your order was placed',
      });
      yield put({
        type: checkoutActions.CHECKOUT_PRODUCTS.SUCCESS,
        addresses,
        products,
        paymentMethod,
      });
      yield delay(2000);
      yield put({
        type: appActions.CLOSE_MESSAGE,
      });
    }
  } catch (error) {
    yield put({
      type: appActions.TRIGGER_MESSAGE,
      kind: 'error',
      message: 'Something went wrong',
    });
    yield put({ type: checkoutActions.CHECKOUT_PRODUCTS.FAILURE });
    yield delay(2000);
    yield put({
      type: appActions.CLOSE_MESSAGE,
    });
  }
}
