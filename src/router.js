// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeMayic from './components/HomeMayic.vue';
import AboutMe from './components/AboutMe.vue';
import ShopMayic from './components/ShopMayic';
import LogIn from './components/LogIn';


const routes = [
  { path: '/', component: HomeMayic, name:'home' },
  { path: '/about', component: AboutMe, name:'about me' },
  { path: '/shop', component: ShopMayic, name: 'shop' },
  { path: '/login', component: LogIn, name: 'login' }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
