import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    name: 'coach-profile',
    props: true,
    component: CoachDetail,
    children: [
      { path: 'contact', name: 'coach-contact', component: ContactCoach }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: CoachRegistration
  },
  {
    path: '/requests',
    name: 'requests',
    component: RequestsReceived
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
