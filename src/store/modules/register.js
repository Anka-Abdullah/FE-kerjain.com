import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    registerWorker(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/workers/register', payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    registerRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/recruiter/register', payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {}
}
