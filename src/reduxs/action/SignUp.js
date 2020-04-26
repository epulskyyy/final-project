import { SIGN_UP } from "../actionTypes";
import axios from "../../axios";

export const _signup = (post, navigate) => {
  return (dispatch) => {
    axios
      .post("/api/auth/signup", post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: SIGN_UP, data: result.data });
        navigate.navigate("Home");
      })
      .catch((e) => {
        alert(e);
      });
  };
};
