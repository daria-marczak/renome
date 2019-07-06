import { takeLatest, put, delay } from 'redux-saga/effects';
import * as contactActions from './contactConstants';

export function* contactSagas() {
  yield takeLatest(contactActions.SEND_MESSAGE.INVOKE, sendMessage);
}

function* sendMessage({ message }) {
  yield put({ type: contactActions.SEND_MESSAGE.REQUEST, message });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      yield delay(1500);
      yield put({
        type: contactActions.SEND_MESSAGE.SUCCESS,
      });
    } else {
      yield put({ type: contactActions.SEND_MESSAGE.FAILURE });
    }
  } catch (error) {
    yield put({ type: contactActions.SEND_MESSAGE.FAILURE });
  }
}
