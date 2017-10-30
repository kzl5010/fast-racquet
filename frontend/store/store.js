// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState: {} = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
);

export default configureStore;
