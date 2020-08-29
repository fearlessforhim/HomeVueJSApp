import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../About";
import MainBlog from "../MainBlog";
import SingleBlogPost from "../SingleBlogPost";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainBlog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
    {
      path: 'blog',
      name: 'Blog Post',
      component: SingleBlogPost
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
