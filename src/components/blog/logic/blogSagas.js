import { takeLatest, put } from 'redux-saga/effects';
import * as blogActions from './blogConstants';

export function* blogSagas() {
  yield takeLatest(blogActions.CREATE_COMMENT.INVOKE, createComment);
}

function* createComment(commentData) {
  yield put({ type: blogActions.CREATE_COMMENT.REQUEST, commentData });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      yield put({ type: blogActions.CREATE_COMMENT.SUCCESS });
    } else {
      yield put({ type: blogActions.CREATE_COMMENT.FAILURE });
    }
  } catch (error) {
    yield put({ type: blogActions.CREATE_COMMENT.FAILURE });
  }
}
