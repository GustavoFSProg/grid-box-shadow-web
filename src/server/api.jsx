import axios from 'axios'

const api = axios.create({
  baseURL: 'https://grid-box-shadow-api.vercel.app/',
  // baseURL: 'http://localhost:5000/',
})

export default api
