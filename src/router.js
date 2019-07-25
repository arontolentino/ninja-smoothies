import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index';
import AddSmoothie from './views/AddSmoothie.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    }
  ]
});
