import { logger } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { createStore, applyMiddleware /** compose */ } from 'redux';
// import { createStateSyncMiddleware } from 'redux-state-sync';
// import { persistStore } from 'redux-persist';

// import actionTypes from './store/actions/actionTypes';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/rootReducer';

// const environment = process.env.NODE_ENV || 'development';
// let isDevelopment = environment === 'development';

//hide redux logs

export const history = createBrowserHistory({ basename: process.env.REACT_APP_ROUTER_BASE_NAME });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const dispatch = store.dispatch;

// export const persistor = persistStore(store);

export default store;
