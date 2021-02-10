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
    meta: { requiresRecruiter: true }
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
    path: '/myprofile',
    name: 'MyProfile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: { requiresWorker: true }
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: { requiresRecruiter: true }
  },
  {
    path: '/company',
    name: 'Company',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Company.vue'),
    meta: { requiresRecruiter: true }
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
    path: '/hire/:id',
    name: 'Hire',
    component: () =>
      import(/* webpackChunkName: "company" */ '../views/Hire.vue'),
    meta: { requiresRecruiter: true }
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
    component: () => import('../views/EditProfile.vue'),
    meta: { requiresRecruiter: true }
  },
  {
    path: '/editprofileuser',
    name: 'EditProfileUser',
    component: () => import('../views/EditProfileUser.vue'),
    meta: { requiresWorker: true }
  },
  {
    path: '/confirmationemail/:id',
    name: 'ConfirmationEmail',
    component: () => import('../views/ConfirmationEmail.vue'),
    meta: { requiresVisitor: true }
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
  } else if (to.matched.some(record => record.meta.requiresRecruiter)) {
    if (store.getters.isRecruiter) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresWorker)) {
    if (store.getters.isWorker) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
