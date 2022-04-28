import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 6000
})

export default service
