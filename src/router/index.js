import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Portfolio from '@/views/Portfolio'
import Contacto from '@/views/Contacto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    base: 'nandyme.space/',
    component: Portfolio
  },
  {
    path: '/contacto',
    name: 'Contacto',
    base: 'nandyme.space/',
    component: Contacto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
