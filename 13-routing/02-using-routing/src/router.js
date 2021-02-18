import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

// we dont need to register components if we use them in router
const routes = [
  {
    path: '/',
    redirect: '/teams'
  },
  {
    name: 'teams',
    path: '/teams', // our-domain.com/teams -> loads TeamsList component
    meta: {
      needsAuth: true
    },
    components: {
      default: TeamsList,
      footer: TeamsFooter
    },
    // alias: '/' // same as redirect but url doesnt change, just another name for the same path

    // for children routes, we must add router-view inside its parent route component
    children: [
      {
        name: 'team-members',
        path: ':teamId',
        component: TeamMembers,
        props: true // tells the router that the dynamic params should be passed into this component as props, rather than just accessing it using $route.params
      }
    ]
  },
  {
    name: 'users',
    path: '/users',
    components: {
      default: UsersList,
      footer: UsersFooter
    },
    beforeEnter: (to, from, next) => {
      console.log('Users before enter');
      console.log(to, from);
      next();
    }
  },
  {
    path: '/:notFound(.*)',
    // redirect: '/teams',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // change name of active class to whichever
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  //   if (to.name === 'team-members') {
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
});

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
