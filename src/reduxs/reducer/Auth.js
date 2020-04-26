import { _LOGIN } from '../actionTypes';

const initialState = {
  listKost: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case _LOGIN:
      return { ...state, listKost: action.data };
    default:
      return state;
  }
}
