import { takeLatest, put, delay } from 'redux-saga/effects';
import * as shopActions from './shopConstants';

export function* shopSagas() {
  yield takeLatest(shopActions.ADD_TO_CART.INVOKE, addToCart);
}

function* addToCart({ quantity, itemId }) {
  yield put({ type: shopActions.ADD_TO_CART.REQUEST, quantity, itemId });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      const cartItem = { itemId, quantity };
      yield delay(1500);
      yield put({
        type: shopActions.ADD_TO_CART.SUCCESS,
        cartItem,
      });
    } else {
      yield put({ type: shopActions.ADD_TO_CART.FAILURE });
    }
  } catch (error) {
    yield put({ type: shopActions.ADD_TO_CART.FAILURE });
  }
}
