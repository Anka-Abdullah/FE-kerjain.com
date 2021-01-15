import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Home },
  state: {},
  mutations: {},
  actions: {}
})
