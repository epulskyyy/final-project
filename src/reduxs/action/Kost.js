import { FETCHING_KOST } from '../actionTypes';
import axios from '../../axios';

export const fetchKostdata = (category) => {
  return (dispatch) => {
    axios
      .get(`/api/kost/category/${category}?category=${category}`)
      .then((result) => {
        console.log(result.data);
        dispatch({ type: FETCHING_KOST, data: result.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
};
