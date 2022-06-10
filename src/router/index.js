import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  },
  {
    path: '/post/:slug',
    name: 'post',
    component: () => import('../views/post.vue')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('../views/tag')
  },
  {
    path: '/tag/:slug',
    name: 'tag_detail',
    component: () => import('../views/tag_detail')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
