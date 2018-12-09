import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';

import { createStore } from 'redux';
import { rootReducer, rootSaga } from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeEnhancers(middlewares));
sagaMiddleware.run(rootSaga);

export default store;
