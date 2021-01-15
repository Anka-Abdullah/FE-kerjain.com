import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginUser from '../views/auth/LoginUser.vue'
import RegisterUser from '../views/auth/RegisterUser.vue'
import ConfirmPassword from '../views/auth/ConfirmPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Company.vue')
  },
  {
    path: '/loginuser',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/registeruser',
    name: 'RegisterUser',
    component: RegisterUser
  },
  {
    path: '/confirmpassword',
    name: 'ConfirmPassword',
    component: ConfirmPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
