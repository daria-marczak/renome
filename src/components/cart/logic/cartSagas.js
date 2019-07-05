import { takeLatest, put, delay } from 'redux-saga/effects';
import * as cartActions from './cartConstants';

export function* cartSagas() {
  yield takeLatest(cartActions.ADD_TO_CART.INVOKE, addToCart);
  yield takeLatest(cartActions.REMOVE_ITEM.INVOKE, removeItem);
  yield takeLatest(cartActions.APPLY_COUPON.INVOKE, applyCoupon);
}

function* addToCart({ quantity, itemId }) {
  yield put({ type: cartActions.ADD_TO_CART.REQUEST, quantity, itemId });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      const cartItem = { quantity: parseInt(quantity), productId: itemId };
      yield delay(1500);
      yield put({
        type: cartActions.ADD_TO_CART.SUCCESS,
        cartItem,
      });
    } else {
      yield put({ type: cartActions.ADD_TO_CART.FAILURE });
    }
  } catch (error) {
    yield put({ type: cartActions.ADD_TO_CART.FAILURE });
  }
}

function* removeItem({ productId }) {
  yield put({ type: cartActions.REMOVE_ITEM.REQUEST, productId });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      yield delay(1500);
      yield put({
        type: cartActions.REMOVE_ITEM.SUCCESS,
        productId,
      });
    } else {
      yield put({ type: cartActions.REMOVE_ITEM.FAILURE });
    }
  } catch (error) {
    yield put({ type: cartActions.REMOVE_ITEM.FAILURE });
  }
}

function* applyCoupon({ applyCoupon }) {
  yield put({ type: cartActions.APPLY_COUPON.REQUEST, applyCoupon });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      yield delay(1500);
      yield put({
        type: cartActions.APPLY_COUPON.SUCCESS,
      });
    } else {
      yield put({ type: cartActions.APPLY_COUPON.FAILURE });
    }
  } catch (error) {
    yield put({ type: cartActions.APPLY_COUPON.FAILURE });
  }
}
