import * as cartActions from './cartConstants';

export const applyCoupon = couponCode => ({
  type: cartActions.APPLY_COUPON.INVOKE,
  couponCode,
});

export const removeItem = productId => ({
  type: cartActions.REMOVE_ITEM.INVOKE,
  productId,
});

export const addToCart = ({ quantity, itemId }) => ({
  type: cartActions.ADD_TO_CART.INVOKE,
  quantity,
  itemId,
});
