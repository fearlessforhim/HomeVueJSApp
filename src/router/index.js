import About from "../About.vue";
import MainBlog from "../components/blog/MainBlog.vue";
import ClockAndBudget from "../components/ClockAndBudget.vue";
import BlockooLanding from "../components/blockoo/BlockooLanding.vue"

import { createRouter, createWebHistory } from "vue-router";

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
      component: ClockAndBudget
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
    },
    {
      path: '/blockoo',
      name: 'Blockoo',
      component: BlockooLanding
    }
  ],
});

export default router;
