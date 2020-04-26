import { LOGIN_USER, LOAD_SESSION, LOGOUT } from "../actionTypes";
import axios from "../../axios";

export const _login = (post, navigate) => {
  return (dispatch) => {
    axios
      .post("api/auth/signin", post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: LOGIN_USER, data: result.data });
        navigate.navigate("Home");
      })
      .catch((e) => {
        alert(e);
      });
  };
};

export const _loadSession = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_SESSION });
  };
};

export const _logout = (navigate) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    navigate.navigate("Login");
  };
};
