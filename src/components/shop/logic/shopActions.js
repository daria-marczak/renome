import * as shopActions from './shopConstants';

export const addToCart = ({ quantity, itemId }) => ({
  type: shopActions.ADD_TO_CART.INVOKE,
  quantity,
  itemId,
});

export const addReview = reviewContent => ({
  type: shopActions.addReview,
  reviewContent,
});
