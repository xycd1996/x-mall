import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // linkExactActiveClass: "link-exact-active"
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@views/home/home')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@views/order/order')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@views/mine/mine')
    }
  ]
})
