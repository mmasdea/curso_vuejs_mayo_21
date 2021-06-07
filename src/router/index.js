import Vue from 'vue'
import VueRouter from 'vue-router'

import Alta from "../views/Alta"
import Home from "../views/Home"
import Bitcoin from "../views/Bitcoin"

Vue.use(VueRouter)

const routes = [
  
  {path: '/alta', name:'alta', component:Alta},
  {path: '/', name:"home", component:Home},
  {path: '/bitcoin', name:'bitcoin', component:Bitcoin},
 


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router