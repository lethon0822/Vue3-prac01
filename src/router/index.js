import { createRouter, createWebHistory } from 'vue-router';
import Component from '@/views/Component.vue';
import Mustache from '@/views/mustache.vue';
import Chapter03 from '@/views/Chapter03.vue';
import Chapter04 from '@/views/Chapter04.vue';
import Chapter05 from '@/views/Chapter05.vue';
import Chapter06 from '@/views/Chapter06.vue';
import Chapter07 from '@/views/Chapter07.vue';
import Chapter08 from '@/views/Chapter08.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      component: Component,
    },
    {
      path: '/Mustache',
      component: Mustache,
    },
    {
      path: '/Chapter03',
      component: Chapter03,
    },
    {
      path: '/Chapter04',
      component: Chapter04,
    },
    {
      path: '/Chapter05',
      component: Chapter05,
    },
    {
      path: '/Chapter06',
      component: Chapter06,
    },
    {
      path: '/Chapter07',
      component: Chapter07,
    },
    {
      path: '/Chapter08',
      component: Chapter08,
    },
  ],
});

export default router;
