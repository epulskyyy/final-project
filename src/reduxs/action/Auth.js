import { LOGIN_USER } from "../actionTypes";
import Axios from "axios";

export const _login = (post, navigate) => {
  return (dispatch) => {
    Axios.post("/api/auth/signin", post)
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
