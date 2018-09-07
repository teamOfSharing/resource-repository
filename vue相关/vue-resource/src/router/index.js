import Vue from 'vue'
import Router from 'vue-router'

// const _import = url => url => import(url)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home')
      // component: _import('../views/home')
    },
    {
      path: '/topic',
      name: 'Topic',
      component: () => import('../views/topic')
      // component: _import('../views/topic')
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('../components/table')
    }
  ]
})

export const menu = new Map([
  ['Home', '首页'],
  ['Topic', '置顶'],
  ['Table', '表格']
])
