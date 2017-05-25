import * as APIUtil from '../util/order_api_util';

export const FETCH_ORDER = "FETCH_ORDER";
export const FETCH_ORDERS = "FETCH_ORDERS";
export const CREATE_ORDER = "CREATE_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS";

export const fetchOrder = id => dispatch => (
  APIUtil.fetchOrder(id).then(
    order => dispatch(receiveOrder(order))
  )
);

export const fetchOrders = () => (dispatch) => (
  APIUtil.fetchOrders().then(
    orders => dispatch(receiveOrders(orders))
  )
);

export const createOrder = order => dispatch => (
  APIUtil.createOrder(order).then(
    order1 => dispatch(receiveOrder(order1)), err => dispatch(receiveOrderErrors(err.responseJSON))
  )
);

export const updateOrder = order => dispatch => (
  APIUtil.updateOrder(order).then(
    order1 => dispatch(receiveOrder(order1)), err => dispatch(receiveOrderErrors(err.responseJSON))
  )
);

export const deleteOrder = id => dispatch => (
  APIUtil.deleteOrder(id).then(
    order => dispatch(removeOrder(order))
  )
);

const receiveOrder = order => ({
  type: RECEIVE_TASK_REQUEST,
  order
});

const receiveOrders = orders => ({
  type: RECEIVE_TASK_REQUESTS,
  orders
});

const removeOrder = order => ({
  type: REMOVE_TASK_REQUEST,
  order
});

const receiveOrderErrors = errors => ({
  type: RECEIVE_TASK_REQUEST_ERRORS,
  errors
});
