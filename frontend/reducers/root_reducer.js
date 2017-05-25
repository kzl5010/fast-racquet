import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import OrdersReducer from './orders_reducer';
import StringiesReducer from './stringies_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stringies: StringiesReducer,
  orders: OrdersReducer
});

export default RootReducer;
