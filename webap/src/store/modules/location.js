import map from '@/utils/map'

const addressInfo = window.localStorage.getItem('addressInfo') ? JSON.parse(window.localStorage.getItem('addressInfo')) : {}

export default {
  namespaced: true,
  state: {
    addressInfo
  },
  getters: {},
  mutations: {
    SET_LOCAINFO (state, location) {
      state.addressInfo = location
      window.localStorage.setItem('addressInfo', JSON.stringify(location))
    }
  },
  actions: {
    geolocation ({commit}) {
      return map.geolocation().then((data) => {
        commit('SET_LOCAINFO', {
          lat: data.position.lat,
          lng: data.position.lng,
          addressName: data.formattedAddress,
          province: data.addressComponent.province,
          district: data.addressComponent.district,
          township: data.addressComponent.township
        })
      })
    }
  }
}
