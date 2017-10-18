import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import LoginModal from './login_modal.jsx';

const mapStateToProps = ({session}, ownProps) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  headertype: ownProps.headertype,
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
