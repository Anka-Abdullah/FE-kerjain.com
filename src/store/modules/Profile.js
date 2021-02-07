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
      console.log('ini payload exp ' + payload)
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/getexprerience/${payload}`)
          .then(result => {
            resolve(result)
            console.log(result)
            context.commit('setExperience', result.data.data)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    },
    getPorto(context, payload) {
      console.log('ini payload porto ' + payload)
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}porto/${payload}`)
          .then(result => {
            resolve(result)
            console.log(result)
            context.commit('setPortofolio', result.data.data)
          })
          .catch(err => {
            reject(err)
            console.log(err)
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
