import * as checkoutActions from './checkoutConstants';

export const checkoutProducts = () => ({
  type: checkoutActions.CHECKOUT_PRODUCTS.INVOKE,
});

export const addOrderDetails = (address, kind) => ({
  type: checkoutActions.ADD_ORDER_DETAILS.INVOKE,
  address,
  kind,
});
