// Vue全家桶
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import routes from './routers/routers.js';

// Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import App from './app.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);

// 初始化
const router = new VueRouter(routes);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
