import About from "../About.vue";
import MainBlog from "../MainBlog.vue";
import Clock from "../components/clock/Clock.vue"

import { createRouter, createWebHistory } from "vue-router";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        redirect: '/clock',
        name: 'Home'
    },
    {
      path: '/*',
      redirect: '/clock',
      name: 'Home'
  },
    {
      path: '/clock',
      name: 'Clock',
      component: Clock
    },
        {
        path: '/blog',
        name: 'Home',
        component: MainBlog
    },
    {
        path: '/blog/about',
        name: 'About',
        component: About
    }
  ],
});

export default router;
