// @flow

import type { UserType } from '../typing/userType';

type StateType = {
  session: {
    currentUser: UserType
  }
};


const selectCurrentUser = (state: StateType): UserType => {
  if (state.session && state.session.currentUser) {
    return state.session.currentUser;
  } else {
    return {
      email: "",
      first_buy: false,
      first_name: "Guest",
      id: 20000,
      last_name: "Dummy",
    };
  }
};

export default selectCurrentUser;