// Vue全家桶
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routers/routers.js';
import modules from './vuex/modules.js';

// Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

// 初始化
const router = new VueRouter(routes);
const store = new Vuex.Store(modules);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
