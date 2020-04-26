import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import Kost from "../reducer/Kost";
import User from "../reducer/Auth";

const rootReducer = combineReducers({
  kost: Kost,
  user: User,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
