import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './shared/header_container';

const App = ({ children }) => (
  <div id="container">
    <header>
    {//  <HeaderContainer />
    }
    </header>
    {children}
  </div>
);

export default App;
