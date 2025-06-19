import Component from '@/views/Component.vue'
import Mustache from '@/views/Mustache.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    }
  ]
})

export default router
