// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store; // TODO remove this? or only use for dev mode
  const myRootEl = document && document.getElementById("root");
  if (myRootEl) {
    ReactDOM.render(<Root store={store}/>, myRootEl);
  }
});
