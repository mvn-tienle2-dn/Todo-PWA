import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "group-news" */ '@/components/home.vue')

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
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   try {
//     if (to.matched[to.matched.length - 1].meta.requiresAuth === false) {
//       if (localStorage.getItem('ACCESS_TOKEN')) {
//         next({path: '/news-feed'})
//       } else {
//         next()
//       }
//     } else if (to.matched[to.matched.length - 1].meta.requiresAuth === true) {
//       if (localStorage.getItem('ACCESS_TOKEN')) {
//         next()
//       } else {
//         next({path: '/news-feed'})
//       }
//     } else {
//       next(true)
//     }
//   } catch (e) {
//     next()
//   }
// })

export default router
