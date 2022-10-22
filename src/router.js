import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Nav from './components/Nav.vue'
import Posts from './components/Posts.vue'
import Authors from './components/Authors.vue'
import Post from './components/Post.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/nav', component: Nav },
  { path: '/posts', component: Posts },
  { path: '/authors', component: Authors },
  { path: '/post/:id', name: 'post', component: Post },
]

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes
})

export default router