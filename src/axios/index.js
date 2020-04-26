import axios from 'axios';
var instance = axios.create({
  baseURL: 'http://10.10.12.79:9876',
});
export default instance;
