/* eslint-disable */
import base from '@/components/index'
export default {
  install (Vue, opt) {
    for (let key in base) {
      Vue.component(key, base[key])
    }
  }
}
