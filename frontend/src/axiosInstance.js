import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://redboost-65f83dc8cbf1.herokuapp.com',
  withCredentials: true, // Important for sessions
})

export default axiosInstance
