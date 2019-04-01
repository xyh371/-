// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import baseUi from '@/plugins'
import '@/utils/hotcss.js'
import store from './store'
Vue.use(baseUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    alert('能不能拿到最新的资源')
  },
  components: { App },
  template: '<App/>'
})
