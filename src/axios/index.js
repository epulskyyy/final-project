import axios from 'axios';
var instance = axios.create({
  baseURL: 'http://10.10.12.71:9876',
});
export default instance;