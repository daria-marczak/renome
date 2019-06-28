import commentsData from '../components/blog/logic/commentsData';

const initialState = {
  blog: {
    fetching: {},
    comments: commentsData,
  },
};

export default initialState;
