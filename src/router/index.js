import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/page/index')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/page/index')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/components/page/products')
    },
    {
      path: '/partner',
      name: 'partner',
      component: () => import('@/components/page/partner')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/components/page/support')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/page/contact')
    }
  ]
})
