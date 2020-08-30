import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../About";
import MainBlog from "../MainBlog";
import SingleBlogPost from "../SingleBlogPost";

Vue.use(VueRouter)

const routes = [
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
    },
    {
        path: '/blog/post',
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
