import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/order_actions';
import AccountForm from './account_form.react';


const mapStateToProps = (state) => ({
    orders: state.orders
});

const mapDispatchToProps = (dispatch) => ({
        fetchOrders: () => dispatch(fetchOrders())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountForm);
