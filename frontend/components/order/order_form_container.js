import { connect } from 'react-redux';
import OrderForm from './order_form';
import { createOrder } from '../../actions/order_actions';
import { fetchStringies } from '../../actions/stringy_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.orders.errors,
  stringies: state.stringies.stringies
});

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(createOrder(order)),
  fetchStringies: () => dispatch(fetchStringies())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
