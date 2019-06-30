import commentsData from '../components/blog/logic/commentsData';
import reviews from '../components/shop/logic/reviewsData';

const initialState = {
  blog: {
    fetching: {},
    comments: commentsData,
  },
  cart: {
    fetching: {},
    cartItems: [],
    reviews: reviews,
  },
};

export default initialState;
