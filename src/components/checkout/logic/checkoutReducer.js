import * as checkoutActions from './checkoutConstants';
import initialState from '../../../appLogic/initialState';

export default (state = initialState.checkout, action) => {
  switch (action.type) {
    case checkoutActions.CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.paymentMethod,
      };

    case checkoutActions.ADD_ORDER_DETAILS.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingForm: true,
        },
      };

    case checkoutActions.CHECKOUT_PRODUCTS.INVOKE:
      return {
        ...state,
        fetching: {
          fetchingForm: true,
        },
      };

    case checkoutActions.ADD_ORDER_DETAILS.SUCCESS:
    case checkoutActions.ADD_ORDER_DETAILS.FAILURE:
    case checkoutActions.CHECKOUT_PRODUCTS.SUCCESS:
    case checkoutActions.CHECKOUT_PRODUCTS.FAILURE:
      return {
        ...state,
        fetching: {
          fetchingForm: false,
        },
      };

    default:
      return state;
  }
};
