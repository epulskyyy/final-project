import { LOGIN_USER } from "../actionTypes";

const initialState = {
  user: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.data };

    default:
      return state;
  }
}
