import About from "../About.vue";
import MainBlog from "../MainBlog.vue";
import Clock from "../components/clock/Clock.vue"

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        redirect: '/clack',
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
