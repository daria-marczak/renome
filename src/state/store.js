import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// eslint-disable-next-line react/prop-types
export default ({ element }) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];
  // const windowExist = typeof window === 'object';

  // const composeEnhancers = windowExist
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   : compose;

  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, {}, enhancer);

  sagaMiddleware.run(rootSaga);

  return <Provider store={store}>{element}</Provider>;
};
