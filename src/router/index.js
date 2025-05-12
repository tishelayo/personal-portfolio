// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServiceRou from '../views/ServiceRou.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import Blog from '../views/Blog.vue'
import LetsTalk from '../views/LetsTalk.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: ServiceRou
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/let-talk',
    name: 'LetTalk',
    component: LetsTalk
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
