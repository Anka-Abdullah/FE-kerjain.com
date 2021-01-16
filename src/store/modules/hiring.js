import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {},
  mutations: {},
  actions: {
    sendJobInvitations(_context, payload) {
      return new Promise(() => {
        axios
          .post(
            `http://${process.env.VUE_APP_ROOT_URL}/hiring/jobinvitation`,
            payload
          )
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
      })
    }
  },
  modules: {}
}
