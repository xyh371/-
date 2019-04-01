
import api from '@/api'
import cookie from '@/utils/cookie'

export default {
  namespaced: true,
  state: {
    info: {}
  },
  mutations: {
    SET_USER_INFO (state, user) {
      state.info = user
    }
  },
  actions: {
    getUserInfo ({commit}) {
      return api.user.getUserInfo().then((res) => {
        console.log(res, 'dispatch')
        commit('SET_USER_INFO', res.data)
      })
    },
    login_out ({commit}) {
      cookie.remove('token')
      commit('SET_USER_INFO', {})
      return Promise.resolve()
    }
  }
}
