import { LOGIN_USER } from "../actionTypes";
import { SIGN_UP } from "../actionTypes";

const initialState = {
  user: [],
  newUser: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.data };
    case SIGN_UP:
      return { ...state, newUser: action.data };
    default:
      return state;
  }
}
