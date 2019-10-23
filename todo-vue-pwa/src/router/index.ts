import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/todos',
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import(/* webpackChunkName: "auth" */ '../views/Todo.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    },
  ],
});

export default router;
