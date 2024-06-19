import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue';
import RestPage from './pages/RestPage.vue';
import CartPage from './pages/CartPage.vue';
import RestInfoPage from './pages/RestInfoPage.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/rest',
    name: 'rest',
    component: RestPage
  },
  {
    path: '/rest/:id',
    name: 'restInfo',
    component: RestInfoPage,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router