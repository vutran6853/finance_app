import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import IntroScreen from '../components/introScreen/IntroScreen'
import WhereTo from '../components/whereTo/WhereTo'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
