import axios from 'axios'

const api = axios.create({
  baseURL: 'https://grid-box-shadow-n185v8eot-gustavofsprog.vercel.app/',
  // baseURL: 'http://localhost:5000/',
})

export default api
