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
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/profile/:data',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/company',
    name: 'Company',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Company.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/registerRecruiter',
    name: 'RegisterRecruiter',
    component: RegisterRecruiter,
    meta: { requiresVisitor: true }
  },
  {
    path: '/loginRecruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter,
    meta: { requiresVisitor: true }
  },
  {
    path: '/hire',
    name: 'Hire',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Hire.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Chat.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/loginuser',
    name: 'LoginUser',
    component: LoginUser,
    meta: { requiresVisitor: true }
  },
  {
    path: '/registeruser',
    name: 'RegisterUser',
    component: RegisterUser,
    meta: { requiresVisitor: true }
  },
  {
    path: '/confirmpassword/:key',
    name: 'ConfirmPassword',
    component: ConfirmPassword
    // meta: { requiresVisitor: true }
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
    // meta: { requiresVisitor: true }
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () =>
      import(/* webpackChunkName: "editprofile" */ '../views/EditProfile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/editprofileuser/:id',
    name: 'EditProfileUser',
    component: () =>
      import(
        /* webpackChunkName: "editprofile" */ '../views/EditProfileUser.vue'
      ),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/loginuser'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
