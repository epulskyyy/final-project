import { FETCHING_KOST } from "../actionTypes";

const initialState = {
  listKost: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_KOST:
      return { ...state, listKost: action.data };
    default:
      return state;
  }
}
