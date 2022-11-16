import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'beforemark',
      path: 'beforemark',
      component: () => import('@/views/beforeMark.vue')
    },
    {
      name: 'marking',
      path: 'marking',
      component: () => import('@/views/Marking.vue')
    },
    {
      name: 'aftermark',
      path: 'aftermark',
      component: () => import('@/views/afterMark.vue')
    }
  ]
})
