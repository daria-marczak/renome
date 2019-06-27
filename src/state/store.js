import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './rootReducer';

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// eslint-disable-next-line react/prop-types
export default ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>;
};
