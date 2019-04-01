import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import cookie from '../utils/cookie'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/classift',
      name: 'classift',
      component: () => import('@/views/classift')
    }, {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart')
    }, {
      path: '/member',
      name: 'member',
      component: () => import('@/views/member')
    }, {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }, {
      path: '/address',
      name: 'address',
      component: () => import('@/views/address'),
      params: {mag: ''}
    }
  ]
})
/**
 *  to 路由信息 (要跳转的)
 *  from 路由信息 (要离开的)
 *  next() 跳转
 */
router.beforeEach((to, from, next) => {
  const login = ['my']
  if (login.indexOf(to.name) !== -1) {
    console.log(cookie.get('token'))
    if (cookie.get('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
