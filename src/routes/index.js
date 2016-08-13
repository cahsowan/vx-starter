import Home from '../components/Home.vue';
import Account from '../components/Account.vue';
import Fruits from '../components/Fruits.vue';
import Login from '../components/Login.vue';
import NotFound from '../components/404.vue';
import AccessForbidden from '../components/403.vue';

import auth from '../auth';

const routes = {
  '/': {
    component: Home,
  },
  '/account': {
    component: Account,
    auth: true,
  },
  '/fruits': {
    component: Fruits,
    auth: true,
  },
  '/login': {
    component: Login,
  },
  '/logout': {
    component: {
      route: {
        activate() {
          auth.logout();
          this.$router.go('/');
        },
      },
    },
  },
  '/forbidden': {
    component: AccessForbidden,
  },
  '*': {
    component: NotFound,
  },
};

function configRouter(router) {
  router.map(routes);

  router.beforeEach((transition) => {
    if (!auth.loggedIn() && transition.to.auth) {
      transition.redirect({
        path: '/login',
        query: { redirect: transition.to.path },
      });
    }

    transition.next();
  });
}

export { configRouter as default };
