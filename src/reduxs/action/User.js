import { LOGIN_USER } from "../actionTypes";
import Axios from "axios";

export const fetchUserData = () => {
  return (dispatch) => {
    Axios.post("http://10.10.12.79:9876/api/auth/signin")
      .then((result) => {
        console.log(result.data);
        dispatch({ type: LOGIN_USER, data: result.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
};
