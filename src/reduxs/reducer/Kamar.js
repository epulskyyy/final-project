import { FETCHING_KAMAR } from '../actionTypes';

const initialState = {
  listKamar: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_KAMAR:
      return { ...state, listKamar: action.listKamar };
    default:
      return state;
  }
}
