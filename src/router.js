import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index';
import AddSmoothie from './views/AddSmoothie.vue';
import EditSmoothie from './views/EditSmoothie.vue';

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
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    }
  ]
});
