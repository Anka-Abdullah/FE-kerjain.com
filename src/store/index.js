import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Register from './modules/register'
import createPersistedState from 'vuex-persistedstate'
import Home from './modules/home'
import Hiring from './modules/hiring'
import Profile from './modules/Profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Home, Hiring, Register, Profile },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
