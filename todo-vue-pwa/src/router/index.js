import Vue from 'vue'
import Router from 'vue-router'
import TodoApp from '../components/Todo'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/todos'
    },

  ]
})

export default router
