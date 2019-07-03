import commentsData from '../components/blog/logic/commentsData';
import reviews from '../components/shop/logic/reviewsData';

const initialState = {
  blog: {
    fetching: {},
    comments: commentsData,
  },
  cart: {
    fetching: {},
    cartItems: ['123123123124', '123123123128964534863'],
    reviews: reviews,
  },
};

export default initialState;
