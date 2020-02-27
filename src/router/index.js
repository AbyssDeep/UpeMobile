import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Empty/Login'
import Layout from '@/components/Layout'
import About from '@/views/Layout/About'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', component: Layout, redirect: '/about',
		children: [
		  { path: '/about', name: 'about', component: About },
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
