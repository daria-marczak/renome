import commentsData from '../components/blog/logic/commentsData';

const initialState = {
  blog: {
    fetching: {},
    comments: commentsData,
  },
  cart: {
    cartItems: [],
  },
};

export default initialState;
