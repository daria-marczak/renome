import * as reservationActions from './reservationConstants';

export const addReservation = (date, time, people) => ({
  type: reservationActions.ADD_RESERVATION.INVOKE,
  date,
  time,
  people,
});
