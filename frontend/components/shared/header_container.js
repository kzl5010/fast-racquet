import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Header from './header.jsx';

const mapStateToProps = ({session}) => {
  if (session) return {
    currentUser: session.currentUser
  }
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
