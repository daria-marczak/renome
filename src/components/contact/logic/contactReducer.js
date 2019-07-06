import initialState from '../../../appLogic/initialState';
import * as contactActions from './contactConstants';

export default (state = initialState.contact, action) => {
  switch (action.type) {
    case contactActions.SEND_MESSAGE.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingMessage: true,
        },
      };

    case contactActions.SEND_MESSAGE.SUCCESS:
    case contactActions.SEND_MESSAGE.FAILURE:
      return {
        ...state,
        fetching: {
          fetchingMessage: false,
        },
      };

    default:
      return state;
  }
};
