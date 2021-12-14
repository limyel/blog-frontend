import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Theme',
    component: () => import('../views/Theme'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home')
      },
      {
        path: 'archives',
        name: 'Archives',
        component: () => import('../views/Archives')
      },
      {
        path: 'tags',
        name: 'Tags',
        component: () => import('../views/Tags')
      },
      {
        path: 'tags/:tag',
        name: 'Tag',
        component: () => import('../views/Tag')
      },
      {
        path: 'posts/:slug',
        name: 'Post',
        component: () => import('../views/Post')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About')
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
