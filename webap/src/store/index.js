import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import location from './modules/location'

Vue.use(Vuex)
const state = new Vuex.Store({
  state: {},
  modules: {
    user,
    location
  }
})
export default state
