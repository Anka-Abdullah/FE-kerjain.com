import axios from 'axios'

export default {
  state: {
    experience: {},
    portofolio: {}
  },
  mutations: {
    setExperience(state, payload) {
      state.experience = payload
    },
    setPortofolio(state, payload) {
      state.portofolio = payload
    }
  },
  actions: {
    getExp(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/getexprerience/${payload}`)
          .then(result => {
            resolve(result)
            context.commit('setExperience', result.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getPorto(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}porto/${payload}`)
          .then(result => {
            resolve(result)
            context.commit('setPortofolio', result.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getDataExperience(state) {
      return state.experience
    },
    getDataPortofolio: state => state.portofolio
  }
}
