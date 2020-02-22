import Vue from 'vue'
import VueRouter from 'vue-router'
import IntroScreen from '../components/introScreen/IntroScreen'
import WhereTo from '../components/whereTo/WhereTo'
import Sale from '../components/sale/Sale'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IntroScreen',
    component: IntroScreen
  },
  {
    path: '/whereTo',
    name: 'WhereTo',
    component: WhereTo
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
