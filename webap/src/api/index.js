// import axios from 'axios'
import {get, post} from '../utils/ajax'

const api = {
  user: {
    getCode: (phone) => get('api/Verification', {phone}),
    login: ({ phone, code }) => post('/api/login', {phone, code})
  }
}
export default api
