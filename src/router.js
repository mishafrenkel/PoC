import Vue from 'vue'
import Router from 'vue-router'
import Settings from './views/Settings.vue'
import HomePage from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
