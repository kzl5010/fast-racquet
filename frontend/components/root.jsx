import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './home_page/greeting_container';

import App from './app';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/account');
    }
  }


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>

          <IndexRoute component={GreetingContainer} />
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
