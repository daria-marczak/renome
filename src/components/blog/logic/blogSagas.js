import { takeLatest, put, delay } from 'redux-saga/effects';
import * as blogActions from './blogConstants';
import * as appActions from '../../../appLogic/appConstants';

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
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Your comment has been added',
      });
      yield delay(1500);
      yield put({
        type: blogActions.CREATE_COMMENT.SUCCESS,
        comment: commentContent,
      });
    } else {
      yield put({ type: blogActions.CREATE_COMMENT.FAILURE });
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'error',
        message: 'There was an error while adding your comment',
      });
    }
  } catch (error) {
    yield put({ type: blogActions.CREATE_COMMENT.FAILURE });
    yield put({
      type: appActions.TRIGGER_MESSAGE,
      kind: 'error',
      message: 'There was an error while adding your comment',
    });
  }
}
