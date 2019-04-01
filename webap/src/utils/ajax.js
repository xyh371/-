import axios from 'axios'

let instance = axios.create({
  headers: {'token': 'aaaaaaaaa'}
})

// 响应拦截
instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  console.log(error.response.data.message)
  return Promise.reject(error)
})

export const get = (url, data) => instance.get('/api/Verification', {
  params: data
})
export const post = (url, data) => instance.post('/api/login', data)
