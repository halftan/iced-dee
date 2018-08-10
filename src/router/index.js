import Vue from 'vue';
import Router from 'vue-router';
import Lounge from '@/components/Lounge';
import Room from '@/components/room';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lounge',
      component: Lounge
    },
    {
      path: '/room/:room',
      name: 'Room',
      component: Room
    }
  ]
});
