import initialState from '../../../appLogic/initialState';
import * as cartActions from './cartConstants';

export default (state = initialState.cart, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingCart: true,
        },
      };

    case cartActions.ADD_TO_CART.SUCCESS:
      return {
        ...state,
        fetching: {
          fetchingCart: false,
        },
        cartItems: [...state.cartItems, action.cartItem],
      };

    case cartActions.REMOVE_ITEM.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingCart: true,
        },
      };

    case cartActions.REMOVE_ITEM.SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.productId !== action.productId
        ),
      };

    default:
      return state;
  }
};
