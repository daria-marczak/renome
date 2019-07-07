import { takeLatest, put, delay } from 'redux-saga/effects';
import * as shopActions from './shopConstants';
import * as appActions from '../../../appLogic/appConstants';

export function* shopSagas() {
  yield takeLatest(shopActions.ADD_REVIEW.INVOKE, addReview);
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
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Review added correctly',
      });
      yield put({
        type: shopActions.ADD_REVIEW.SUCCESS,
        comment: commentContent,
      });
    } else {
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Something went wrong',
      });
      yield put({ type: shopActions.ADD_REVIEW.FAILURE });
    }
  } catch (error) {
    yield put({
      type: appActions.TRIGGER_MESSAGE,
      kind: 'success',
      message: 'Something went wrong',
    });
    yield put({ type: shopActions.ADD_REVIEW.FAILURE });
  }
}
