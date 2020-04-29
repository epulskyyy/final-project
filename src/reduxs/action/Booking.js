import axios from "../../axios";
import { BOOKING } from "../actionTypes";

export const _booking = (post, navigate) => {
  return (dispatch) => {
    axios
      .post("/api/transaction", post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: BOOKING, data: result.data });
        alert("Book Successful");
        navigate.navigate("DetailKost");
      })
      .catch((e) => {
        alert(e);
      });
  };
};
