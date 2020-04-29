import { BOOKING } from "../actionTypes";

const initialState = {
  listBooking: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case BOOKING:
      return { ...state, listBooking: action.listBooking };

    default:
      return state;
  }
}
