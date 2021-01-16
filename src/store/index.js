import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Home from './modules/home'
import Hiring from './modules/hiring'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Home, Hiring },
  state: {},
  mutations: {},
  actions: {}
})
