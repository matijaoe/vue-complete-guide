import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

// we dont need to register components if we use them in router
const routes = [
  {
    path: '/teams', // our-domain.com/tems -> load TeamsList component
    component: TeamsList,
    name: 'Teams'
  },
  {
    path: '/users',
    component: UsersList
  },
  {
    path: '/teams/:teamId',
    component: TeamMembers,
    name: 'TeamMembers'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // change name of active class to whichever
  linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
