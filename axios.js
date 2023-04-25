import axios from "axios";
/* import 'dotenv/config';

console.log(process.env); */

export const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});