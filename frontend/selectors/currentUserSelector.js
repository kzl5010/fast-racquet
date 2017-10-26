// @flow
type StateType = {
  session: {
    currentUser: UserType
  }
};

type UserType = {
  email: string,
  first_buy: boolean,
  first_name: string,
  id: number,
  last_name: string,
};

const selectCurrentUser = (state: StateType): UserType => {

  return state.session.currentUser;
};