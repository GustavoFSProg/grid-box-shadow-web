import axios from 'axios'

const api = axios.create({
  baseURL: 'https://grid-box-shadow-j4yc0fj0t-gustavofsprog.vercel.app/',
  // baseURL: 'http://localhost:5000/',
})

export default api
