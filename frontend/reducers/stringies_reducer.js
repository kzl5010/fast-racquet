import { merge } from 'lodash';

import {
  RECEIVE_STRINGY,
  RECEIVE_STRINGIES,
} from '../actions/stringy_actions';

const StringiesReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STRINGY:
      const stringy = action.stringy;
      return merge({}, state, {[stringy.id]: stringy});
    case RECEIVE_STRINGIES:
      return merge({}, state, action.stringies); // TODO test this
    // case REMOVE_STRINGYER:
    //   let newState = merge({}, state);
    //   delete newState[action.stringyRequest.id];
    //   return newState;
    // case RECEIVE_STRINGYER_ERRORS:
    //   const errors = action.errors;
    //   return merge({}, state, {
    //     errors
    //   });
    default:
      return state;
    }

};

export default StringiesReducer
