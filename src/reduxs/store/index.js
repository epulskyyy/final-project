import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import Kost from "../reducer/Kost";
import User from "../reducer/Auth";
import Booking from "../reducer/Booking";

const rootReducer = combineReducers({
  kost: Kost,
  user: User,
  booking: Booking,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
