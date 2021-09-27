import axios from 'axios'

const { REACT_APP_API_URL, REACT_APP_API_TOKEN } = process.env

const Api = axios.create({
    baseURL: `${REACT_APP_API_URL}${REACT_APP_API_TOKEN}`,
  });
  
  export default Api;