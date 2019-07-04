import * as shopActions from './shopConstants';

export const addReview = reviewContent => ({
  type: shopActions.ADD_REVIEW.INVOKE,
  reviewContent,
});
