export default {

  routes: [
    {
      path: '/',
      name: 'app',
      component: require('../pages/index.vue')
    },
    {
      path: '*',
      component: {template: 'not found'}
    }
  ]

}