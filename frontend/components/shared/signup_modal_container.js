import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SignupModal from './signup_modal.jsx';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
