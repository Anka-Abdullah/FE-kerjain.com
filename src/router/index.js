import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginUser from '../views/auth/LoginUser.vue'
import RegisterUser from '../views/auth/RegisterUser.vue'
import ConfirmPassword from '../views/auth/ConfirmPassword.vue'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
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
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () =>
      import(/* webpackChunkName: "editprofile" */ '../views/EditProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
