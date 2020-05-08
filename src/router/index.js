import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserInfo from '@/components/UserInfo'
import Login from '@/components/Login'
import Appindex from '@/components/Appindex'
Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    { 
      path: '/userinfo', 
      component: UserInfo}]
})
