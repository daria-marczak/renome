import commentsData from '../components/blog/logic/commentsData';

const initialState = {
  blog: {
    fetching: {},
    comments: commentsData,
  },
  cart: {
    fetching: {},
    cartItems: [],
  },
};

export default initialState;
