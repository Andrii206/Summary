import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main.index',
      component: () => import('../views/main/Index.vue')
    },
  ]
})

export default router
