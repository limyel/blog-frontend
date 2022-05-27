import {
  createRouter, createWebHistory,
} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Post from '../pages/post.vue'
import Tag from '../pages/tag.vue'
import TagDetail from '../pages/tag_detail.vue'
import Search from '../pages/search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:slug',
    name: 'Post',
    component: Post
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/tag/:slug',
    name: 'TagDetail',
    component: TagDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
