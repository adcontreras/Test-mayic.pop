// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeMayic from './components/HomeMayic.vue';
import AboutMe from './components/AboutMe.vue';
import ShopMayic from './components/ShopMayic';
import LogIn from './components/LogIn';
import ShopCart from './components/ShopCart'


const routes = [
  { path: '/', component: HomeMayic, name:'home' },
  { path: '/about', component: AboutMe, name:'about me' },
  { path: '/shop', component: ShopMayic, name: 'shop' },
  { path: '/login', component: LogIn, name: 'login' },
  { path: '/cart', component: ShopCart, name: 'cart' }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
