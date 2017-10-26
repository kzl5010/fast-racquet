import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Header from './header.jsx';
import currentUserSelector from '../../selectors/currentUserSelector';

const mapStateToProps = (state) => ({
  currentUser: currentUserSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
