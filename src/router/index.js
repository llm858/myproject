import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import cart from '@/components/cart'
import login from '@/components/login'
import tabbarIcon from '@/components/tabbarIcon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/cart',
      name: 'cart',
      component:cart
    },
    {
      path: '/tabbarIcon',
      name: 'tabbarIcon',
      component:tabbarIcon
    }
  ]
})
