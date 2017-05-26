import * as APIUtil from '../util/stringy_api_util';

export const FETCH_STRINGY = "FETCH_STRINGY";
export const FETCH_STRINGIES = "FETCH_STRINGIES";
export const RECEIVE_STRINGY = "RECEIVE_STRINGY";
export const RECEIVE_STRINGIES = "RECEIVE_STRINGIES";

export const fetchStringy = id => dispatch => (
  APIUtil.fetchStringy(id).then(stringy => dispatch(receiveStringy(stringy)))
);

export const fetchStringies = () => dispatch => (
  APIUtil.fetchStringies().then(stringies => dispatch(receiveStringies(stringies)))
);

const receiveStringy = stringy => ({
  type: RECEIVE_STRINGY,
  stringy
});

const receiveStringies = stringies => ({
  type: RECEIVE_STRINGIES,
  stringies
});
