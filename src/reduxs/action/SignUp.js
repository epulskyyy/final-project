import { SIGNUP } from '../actionTypes';
import axios from '../../axios';

export const _signup = (post, navigate) => {
  return (dispatch) => {
    axios
      .post('/api/auth/signup', post)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: SIGNUP, data: result.data });
        alert('Success!!');
        navigate.navigate('Login');
      })
      .catch((e) => {
        alert(e);
      });
  };
};
