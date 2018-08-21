import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Totop from '../views/topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Totop',
      component: Totop
    }
  ]
})
