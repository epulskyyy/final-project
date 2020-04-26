import { LOGIN_USER } from '../actionTypes';
import axios from '../../axios';

export const _login = (post) => {
  return (dispatch) => {
    axios
      .post('api/auth/signin', post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: _LOGIN, data: result.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
};
