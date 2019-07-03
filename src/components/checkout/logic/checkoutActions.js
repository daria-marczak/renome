import * as checkoutActions from './checkoutConstants';

export const checkoutProducts = (address, products) => ({
  type: checkoutActions.CHECKOUT_PRODUCTS.INVOKE,
  address,
  products,
});
