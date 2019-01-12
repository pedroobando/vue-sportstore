import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Store from '@/components/Store';
import ShoppingCart from '@/components/ShoppingCart';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Store },
    { path: '/cart', name: 'cart', component: ShoppingCart },
    { path: '/about', name: 'about', component: About },
    { path: '*', redirect: '/' },

  ]
})
