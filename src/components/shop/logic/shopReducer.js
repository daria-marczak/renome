import initialState from '../../../appLogic/initialState';
import * as shopActions from './shopConstants';

export default (state = initialState.cart, action) => {
  switch (action.type) {
    case shopActions.ADD_REVIEW.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingReviews: true,
        },
      };

    case shopActions.ADD_REVIEW.SUCCESS:
      return {
        ...state,
        fetching: {
          fetchingReviews: false,
        },

        reviews: [...state.reviews, action.comment],
      };

    case shopActions.ADD_REVIEW.FAILURE:
      return {
        ...state,
        fetching: {
          fetchingReviews: false,
        },
      };

    default:
      return state;
  }
};
