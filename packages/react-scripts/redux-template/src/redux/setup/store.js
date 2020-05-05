import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { history } from './history';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const configureStore = (defaultState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [sagaMiddleware, reduxRouterMiddleware];

  const newStore = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga, newStore);

  return newStore;
};

export const store = configureStore();
