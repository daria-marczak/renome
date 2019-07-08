import { takeLatest, put, delay } from 'redux-saga/effects';
import * as reservationActions from './reservationConstants';
import * as appActions from '../../../appLogic/appConstants';

export function* reservationSagas() {
  yield takeLatest(reservationActions.ADD_RESERVATION.INVOKE, addReservation);
}

function* addReservation({ date, time, people }) {
  yield put({
    type: reservationActions.ADD_RESERVATION.REQUEST,
    date,
    time,
    people,
  });

  try {
    const response = { isSuccess: true };

    if (response.isSuccess) {
      yield delay(1500);
      yield put({
        type: appActions.TRIGGER_MESSAGE,
        kind: 'success',
        message: 'Reservation has been made',
      });
      yield put({
        type: reservationActions.ADD_RESERVATION.SUCCESS,
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
      message: 'There was an error while making a reservation',
    });
    yield put({ type: reservationActions.ADD_RESERVATION.FAILURE });
    yield delay(2000);
    yield put({
      type: appActions.CLOSE_MESSAGE,
    });
  }
}
