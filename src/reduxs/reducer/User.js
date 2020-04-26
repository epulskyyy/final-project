import { LOGIN_USER } from "../actionTypes";

const initialState = {
  listUser: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.data };

    default:
      return state;
  }
}
