// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/camina-harmonie/',
    name: 'Home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
