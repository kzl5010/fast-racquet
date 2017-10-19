import { merge } from 'lodash';

import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS,
  REMOVE_ORDER, RECEIVE_ORDER_ERRORS
} from '../actions/order_actions';

const OrdersReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ORDER:
      const order = action.order;
      return merge({}, state, {[order.id]: order});
    case RECEIVE_ORDERS:
      return action.orders;
    case REMOVE_ORDER:
      let newState = merge({}, state);
      let j = 0;
      for (let i = 0; i < newState.task_requests.length; i++) {
        if (newState.task_requests[i].id === action.order.id) {
          newState.orders.splice(i, 1);
        }
      }
      // delete newState.task_requests[j];
      return newState;
    case RECEIVE_ORDER_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
    }

};

export default OrdersReducer;
