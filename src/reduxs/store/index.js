import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import Kost from "../reducer/Kost";

const rootReducer = combineReducers({
  kost: Kost,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
