import { connect } from 'react-redux';
import OrderForm from './order_form.jsx';
import { createOrder } from '../../actions/order_actions';
import { fetchStringies } from '../../actions/stringy_actions';
import selectCurrentUser from '../../selectors/currentUserSelector';

export const mapStateToProps = (state, ownProps) => ({
  currentUser: selectCurrentUser(state),
  errors: state.orders.errors,
  stringies: state.stringies.stringies
});

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(createOrder(order)),
  fetchStringies: () => dispatch(fetchStringies())
});

export const connectedOrderFormContainer = connect(mapStateToProps, mapDispatchToProps)(OrderForm);
