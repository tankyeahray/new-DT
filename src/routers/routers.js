import index from '../pages/index.vue';
import error from '../pages/error.vue';

export default {
  routes: [
    {
      path: '/',
      name: 'name',
      component: index
    },
    {
      path: '*',
      name: 'default',
      component: error
    }
  ]
}