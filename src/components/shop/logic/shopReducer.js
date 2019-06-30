import initialState from '../../../appLogic/initialState';
import * as shopActions from './shopConstants';

export default (state = initialState.cart, action) => {
  switch (action.type) {
    case shopActions.ADD_TO_CART.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingCart: true,
        },
      };

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

        reviews: [...state.reviews, action.reviewContent],
      };

    case shopActions.ADD_REVIEW.FAILURE:
      return {
        ...state,
        fetching: {
          fetchingReviews: false,
        },
      };

    case shopActions.ADD_TO_CART.SUCCESS:
      return {
        ...state,
        fetching: {
          fetchingCart: false,
        },
        cartItems: [...state.cartItems, action.cartItem],
      };

    default:
      return state;
  }
};
