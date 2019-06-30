import { takeLatest, put, delay } from 'redux-saga/effects';
import * as shopActions from './shopConstants';

export function* shopSagas() {
  yield takeLatest(shopActions.ADD_TO_CART.INVOKE, addToCart);
  yield takeLatest(shopActions.ADD_REVIEW.INVOKE, addReview);
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

function* addReview({ reviewContent }) {
  yield put({ type: shopActions.ADD_REVIEW.REQUEST, reviewContent });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      const commentContent = {
        id: Math.random(),
        author: reviewContent.author,
        stars: reviewContent.rating,
        content: reviewContent.message,
      };

      yield delay(1500);
      yield put({
        type: shopActions.ADD_REVIEW.SUCCESS,
        comment: commentContent,
      });
    } else {
      yield put({ type: shopActions.ADD_REVIEW.FAILURE });
    }
  } catch (error) {
    yield put({ type: shopActions.ADD_REVIEW.FAILURE });
  }
}
