import { _LOGIN } from '../actionTypes';
import axios from '../../axios';

export const _login = (post) => {
  return (dispatch) => {
    axios
      .post(`/api/login`, post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: _LOGIN, data: result.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
};
