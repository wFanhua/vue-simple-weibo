import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home'),
        name: 'home',
      },
      {
        path: '/ground',
        component: () => import(/* webpackChunkName: "ground" */ '../views/ground'),
        name: 'ground',
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
