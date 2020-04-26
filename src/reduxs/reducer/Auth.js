import { _LOGIN } from '../actionTypes';

const initialState = {
  user: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case _LOGIN:
      action.navigate.navigate('Home');
      return { ...state, user: action.data };
    default:
      return state;
  }
}
