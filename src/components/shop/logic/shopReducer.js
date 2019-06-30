import initialState from '../../../appLogic/initialState';
import * as shopActions from './shopConstants';

export default (state = initialState.cart, action) => {
  switch (action.type) {
    case shopActions.ADD_TO_CART.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingComments: true,
        },
      };

    case shopActions.ADD_TO_CART.SUCCESS:
      return {
        ...state,
        fetching: {
          fetchingComments: false,
        },
        cartItems: [...state.cartItems, action.cartItem],
      };

    default:
      return state;
  }
};
