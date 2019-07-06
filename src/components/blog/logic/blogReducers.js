import initialState from '../../../appLogic/initialState';
import * as blogActions from './blogConstants';

export default (state = initialState.blog, action) => {
  switch (action.type) {
    case blogActions.CREATE_COMMENT.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingComments: true,
        },
      };

    case blogActions.CREATE_COMMENT.SUCCESS:
      return {
        ...state,
        fetching: {
          fetchingComments: false,
        },
        comments: [...state.comments, action.comment],
      };
    case blogActions.CREATE_COMMENT.FAILURE:
      return {
        ...state,
        fetching: {
          fetchingComments: false,
        },
      };

    default:
      return state;
  }
};
