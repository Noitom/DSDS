import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('@/components/page/HomePage')
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('@/components/page/HomePage')
    },
    {
      path: '/dataSearch',
      name: 'dataSearch',
      component: () => import('@/components/page/DataSearch')
    },
    {
      path: '/dataCenter',
      name: 'dataCenter',
      component: () => import('@/components/page/DataCenter')
    },
    {
      path: '/dataStatistics',
      name: 'dataStatistics',
      component: () => import('@/components/page/DataStatistics')
    },
    {
      path: '/equipmentCenter',
      name: 'equipmentCenter',
      component: () => import('@/components/page/EquipmentCenter')
    },
    {
      path: '/scientificOnline',
      name: 'scientificOnline',
      component: () => import('@/components/page/ScientificOnline')
    },
    {
      path: '/systemManage',
      name: 'systemManage',
      component: () => import('@/components/page/SystemManage')
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: () => import('@/components/page/PersonalCenter')
    }
  ]
})
