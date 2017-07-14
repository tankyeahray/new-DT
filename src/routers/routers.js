import index from '../pages/index.vue';
import error from '../pages/error.vue';
import table from '../pages/table.vue';

export default {
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '*',
      name: 'default',
      component: error
    }
  ]
}