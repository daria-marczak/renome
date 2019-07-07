import initialState from '../../../appLogic/initialState';
import * as reservationActions from './reservationConstants';

export default (state = initialState.reservation, action) => {
  switch (action.type) {
    case reservationActions.ADD_RESERVATION.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingReservation: true,
        },
      };

    case reservationActions.ADD_RESERVATION.SUCCESS:
    case reservationActions.ADD_RESERVATION.FAILURE:
      return {
        ...state,
        fetching: {
          fetchingReservation: false,
        },
      };

    default:
      return state;
  }
};
