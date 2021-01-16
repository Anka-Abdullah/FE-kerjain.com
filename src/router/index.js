import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginRecruiter from '../views/auth/LoginRecruiter.vue'
import LoginUser from '../views/auth/LoginUser.vue'
import RegisterRecruiter from '../views/auth/RegisterRecruiter.vue'
import RegisterUser from '../views/auth/RegisterUser.vue'
import ConfirmPassword from '../views/auth/ConfirmPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
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
    path: '/registerRecruiter',
    name: 'RegisterRecruiter',
    component: RegisterRecruiter
  },
  {
    path: '/loginRecruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter
  },
  {
    path: '/loginUser',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/hire',
    name: 'Hire',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Hire.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Chat.vue')
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
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
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
