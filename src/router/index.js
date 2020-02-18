import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import info from '@/pages/info'
import chart from '@/pages/chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {   
      //'/'重定向为'/home'
      path: '/',
      name: 'rederictHome',
      redirect: '/home'
    }
  ]
})
