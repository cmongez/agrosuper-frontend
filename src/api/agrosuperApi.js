import axios from 'axios';

const URL = process.env.REACT_APP_API_URL || 'http://f11.cl:8090';

const productsApi = axios.create({
  baseURL: URL,
});

export default productsApi;
