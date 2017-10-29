// @flow

import type { errorType } from '../typing/errorType';

type StateType = {
  orders: {
    errors?: Array<any>
  }
};

const selectOrderErrors = (state: StateType): Array | void => {
  if (state.orders && state.orders.errors)
};

export default selectOrderErrors;