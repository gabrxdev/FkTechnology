import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Infos from '../views/Infos.vue'
import Suporte from '../views/Suporte.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/infos',
      name: 'infos',
      component: Infos
    },
    {
      path: '/suporte',
      name: 'suporte',
      component: Suporte
    }
  ]
})

export default router
