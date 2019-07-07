import initialState from './initialState';
import * as appActions from './appConstants';

export default (state = initialState.appData, action) => {
  switch (action.type) {
    case appActions.TRIGGER_MESSAGE:
      return {
        ...state,
        isSnackBarActive: true,
        message: {
          kind: action.kind,
          content: action.message,
        },
      };

    case appActions.CLOSE_MESSAGE:
      return {
        ...state,
        isSnackBarActive: false,
      };

    default:
      return state;
  }
};
