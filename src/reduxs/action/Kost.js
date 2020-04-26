import axios from 'axios';
import { FETCHING_KOST } from '../actionTypes';

export const fetchKostdata = () => {
  return (dispatch) => {
    axios
      .get('http://10.10.12.79:9876/api/kost')
      .then((result) => {
        dispatch({ type: FETCHING_KOST, data: result.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
};
