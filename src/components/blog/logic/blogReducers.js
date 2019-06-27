import initialState from '../../../appLogic/initialState';
import * as blogActions from './blogConstants';

export default (state = initialState.blog, action) => {
  switch (action.type) {
    case blogActions.CREATE_COMMENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};
