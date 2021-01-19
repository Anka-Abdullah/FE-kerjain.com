import axios from 'axios'

export default {
  state: {
    experience: [],
    portofolio: []
  },
  mutations: {
    setExperience(state, payload) {
      state.experience = payload.data
    },
    setPortofolio(state, payload) {
      state.portofolio = payload.data
    }
  },
  actions: {
    getExp({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(``)
          .then(result => {
            resolve(result)
            console.log(result)
            commit('setExperience', result.data)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    },
    getPorto({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(``)
          .then(result => {
            resolve(result)
            console.log(result)
            commit('setPortofolio', result.data)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    }
  },
  getters: {
    getDataExperienxe: state => state.experience,
    getDataPortofolio: state => state.portofolio
  }
}
