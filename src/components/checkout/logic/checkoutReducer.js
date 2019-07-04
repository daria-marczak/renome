import * as checkoutActions from './checkoutConstants';
import initialState from '../../../appLogic/initialState';

export default (state = initialState.checkout, action) => {
  switch (action.type) {
    case checkoutActions.CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.paymentMethod,
      };

    default:
      return state;
  }
};
