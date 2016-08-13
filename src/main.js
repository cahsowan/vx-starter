import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import interceptor from './interceptor';
import configRouter from './routes';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.interceptors.push(interceptor);

const router = new VueRouter();

const opts = {
  components: { App },
  replace: false,
};

configRouter(router);
router.start(opts, 'body');
