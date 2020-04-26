import { LOGIN_USER, LOGOUT } from "../actionTypes";
import { LOAD_SESSION, SIGNUP } from "../actionTypes";
import { AsyncStorage } from "react-native";

const initialState = {
  user: {},
  isLogined: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      _storeData(action.data);
      return { ...state, user: action.data, isLogined: true };
    case LOAD_SESSION:
      return _retrieveData(state);
    case SIGNUP:
      return state;
    case LOGOUT:
      AsyncStorage.clear();
      return { ...state, user: [], isLogined: false };
    default:
      return state;
  }
}

_storeData = async () => {
  try {
    AsyncStorage.setItem("user", JSON.stringify(action.data));
    AsyncStorage.setItem("isLogined", true);
  } catch (error) {
    console.log(error);
  }
};

_retrieveData = async (state) => {
  try {
    const user = await AsyncStorage.getItem("user");
    const isLogined = await AsyncStorage.getItem("isLogined");
    if (user !== null) {
      // We have data!!
      console.log(user);
      return { ...state, user: JSON.parse(user), isLogined: isLogined };
    }
  } catch (error) {
    console.log(error);
    // Error retrieving data
  }
};
