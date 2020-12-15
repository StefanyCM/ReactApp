import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer'

const sagaMiddleware = reduxSaga();

const middlewar = [ sagaMiddleware ];

const composeEnhacers = window.REDUX_DEVTOOLS_eXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, applyMiddleware(...middlewar));

sagaMiddleware.run(rootSaga);

