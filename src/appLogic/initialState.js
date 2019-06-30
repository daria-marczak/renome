import commentsData from '../components/blog/logic/commentsData';

const initialState = {
  blog: {
    fetching: {},
    comments: commentsData,
  },
  cart: {
    fetching: {},
    cartItems: [],
    reviews: [],
  },
};

export default initialState;
