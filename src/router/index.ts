import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@views/MainView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@views/MapView.vue'),
    },
    {
      path: '/rental/:id',
      name: 'rental',
      component: () => import('@views/RentalView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
});

export default router;
