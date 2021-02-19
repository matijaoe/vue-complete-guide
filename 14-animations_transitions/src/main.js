// https://14-animations-transitions.mat2ja.vercel.app

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AllUsers
    },
    {
      path: '/goals',
      component: CourseGoals
    }
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// only mount the app when the router is fully set up
// now it wont animate the inital route on load
router.isReady().then(() => {
  app.mount('#app');
});
// app.mount('#app');
