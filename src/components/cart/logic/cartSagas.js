import { takeLatest, put, delay } from 'redux-saga/effects';
import * as cartActions from './cartConstants';
import * as appActions from '../../../appLogic/appConstants';

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
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Product has been added to cart',
      });
      yield put({
        type: cartActions.ADD_TO_CART.SUCCESS,
        cartItem,
      });
    } else {
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'error',
        message: 'There was an error while adding to cart',
      });
      yield put({ type: cartActions.ADD_TO_CART.FAILURE });
    }
  } catch (error) {
    yield put({
      type: appActions.TRIGGER_MESSAGE,
      kind: 'error',
      message: 'There was an error while adding to cart',
    });
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
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Product successfully removed',
      });
      yield put({
        type: cartActions.REMOVE_ITEM.SUCCESS,
        productId,
      });
    } else {
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'error',
        message: 'There was an error while removing from cart',
      });
      yield put({ type: cartActions.REMOVE_ITEM.FAILURE });
    }
  } catch (error) {
    yield put({
      type: appActions.TRIGGER_MESSAGE,
      kind: 'error',
      message: 'There was an error while removing from cart',
    });
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
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Coupon successfully applied',
      });
    } else {
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'There was an error while adding coupon',
      });
      yield put({ type: cartActions.APPLY_COUPON.FAILURE });
    }
  } catch (error) {
    yield put({
      type: appActions.TRIGGER_MESSAGE,
      kind: 'success',
      message: 'There was an error while adding coupon',
    });
    yield put({ type: cartActions.APPLY_COUPON.FAILURE });
  }
}
