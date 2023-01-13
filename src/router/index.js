import About from "../About.vue";
import MainBlog from "../MainBlog.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        redirect: '/blog',
        name: 'Home',
        component: MainBlog
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
