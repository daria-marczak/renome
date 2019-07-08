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
  },
  reservation: {
    fetching: {},
  },
  shop: {
    reviews: reviews,
    fetching: {},
  },
  checkout: {
    fetching: {},
    paymentMethod: 'paypal',
  },
  contact: {
    fetching: {},
  },
  appData: {
    isSnackBarActive: false,
    message: {
      kind: '',
      content: '',
    },
  },
};

export default initialState;
