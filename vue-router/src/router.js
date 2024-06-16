import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue';
import RestPage from './pages/RestPage.vue';
import RestInfoPage from './pages/RestInfoPage.vue';
import CartPage from './pages/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/rest',
    name: 'Rest',
    component: RestPage
  },
  {
    path: '/rest/info',
    name: 'RestInfo',
    component: RestInfoPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router