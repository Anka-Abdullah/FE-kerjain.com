import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Register from './modules/register'
import createPersistedState from 'vuex-persistedstate'
import Home from './modules/home'
import Hiring from './modules/hiring'
import Profile from './modules/Profile'
import ProfileUser from './modules/profileworker'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Home, Hiring, Register, Profile, ProfileUser },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
      // paths: ['Auth.user']
    })
  ]
})
