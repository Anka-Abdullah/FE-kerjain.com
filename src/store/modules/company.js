import axios from 'axios'
export default {
  state: {
    company: ''
  },
  mutations: {
    setCompany(state, payload) {
      state.company = payload
    }
  },
  actions: {
    getCompanyVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}recruiter/${payload}`)
          .then(result => {
            context.commit('setCompany', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getCompanyData(state) {
      return state.company
    }
  }
}
