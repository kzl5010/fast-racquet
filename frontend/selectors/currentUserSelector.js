// @flow

import type { UserType } from '../typing/userType';

type StateType = {
  session: {
    currentUser: UserType
  }
};


const selectCurrentUser = (state: StateType): UserType | void => {
  if (state.session && state.session.currentUser) {
    return state.session.currentUser;
  } else {
    return undefined;
  }
};

export default selectCurrentUser;