import Vue from 'vue'
import VueRouter from 'vue-router'

import Belstar from '../paged/belstar/policy/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/:belstar",
    name:"Belstar",
    component:Belstar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
