import { takeLatest, put, delay } from 'redux-saga/effects';
import * as blogActions from './blogConstants';

export function* blogSagas() {
  yield takeLatest(blogActions.CREATE_COMMENT.INVOKE, createComment);
}

function* createComment({ comment }) {
  yield put({ type: blogActions.CREATE_COMMENT.REQUEST, comment });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      const commentContent = {
        id: Math.random(),
        author: comment.author,
        email: comment.email,
        date: new Date(),
        content: comment.message,
      };

      yield delay(1500);
      yield put({
        type: blogActions.CREATE_COMMENT.SUCCESS,
        comment: commentContent,
      });
    } else {
      yield put({ type: blogActions.CREATE_COMMENT.FAILURE });
    }
  } catch (error) {
    yield put({ type: blogActions.CREATE_COMMENT.FAILURE });
  }
}
