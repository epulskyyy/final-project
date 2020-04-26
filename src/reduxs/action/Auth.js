import { LOGIN_USER } from "../actionTypes";
import Axios from "axios";

export const _login = (post) => {
  return (dispatch) => {
    Axios.post("http://10.10.12.79:9876/api/auth/signin", post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: _LOGIN, data: result.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
};
