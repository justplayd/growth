import { applyMiddleware, legacy_createStore as createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import reducers from './../reducers';
import config from './../config.json';

const { application: { environment } } = config;

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();

const store = createStore(
	combineReducers(reducers),
	undefined,
	composeEnhancers(applyMiddleware(
		routerMiddleware(history),
		thunk,
		environment !== 'prod' && createLogger({ collapsed: true })
	))
);

export default store;
export { history };
