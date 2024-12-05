import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../About.vue')
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})