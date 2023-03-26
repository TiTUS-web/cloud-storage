import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import fileReducer from './reducers/fileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  files: fileReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
