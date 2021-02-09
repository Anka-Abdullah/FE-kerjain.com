import axios from 'axios'
export default {
  state: {
    user: {},
    recruiter: {},
    skill: {},
    exps: {},
    portos: {}
  },
  mutations: {
    setUserById(state, payload) {
      state.user = payload
    },
    setRecruiterById(state, payload) {
      state.recruiter = payload
    },
    setSkill(state, payload) {
      state.skill = payload
    },
    setExps(state, payload) {
      state.exps = payload
    },
    setPortos(state, payload) {
      state.portos = payload
    }
  },
  actions: {
    getUserByIds(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/${payload}`)
          .then(result => {
            context.commit('setUserById', result.data.data[0])
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    getRecruiterByIds(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}recruiter/${payload}`)
          .then(result => {
            context.commit('setRecruiterById', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updateProfileUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}workers/${context.state.user.user_id}`,
            payload
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updateProfileRecruiters(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}recruiter/${context.state.recruiter.user_id}`,
            payload
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    UpdateImageUsers(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload.id)
        console.log(payload)
        axios
          .patch(
            `${process.env.VUE_APP_URL}editPhoto/${payload.id}`,
            payload.data
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    getSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}getuserskill/${payload}`)
          .then(result => {
            context.commit('setSkill', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    postSkill(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .post(`${process.env.VUE_APP_URL}skills/`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    deleteSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}skill/${payload.skill_id}`)
          .then(result => {
            context.dispatch('getSkill', payload.user_id)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getExps(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/getexprerience/${payload}`)
          .then(result => {
            context.commit('setExps', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    postExps(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}workers/addExp`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    delExps(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}workers/exprerience/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getPortos(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}porto/${payload}`)
          .then(result => {
            context.commit('setPortos', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    postPortos(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}porto`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    delPortos(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}porto/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    setUserId(state) {
      return state.user
    },
    setRecruiterId(state) {
      return state.recruiter
    },
    getSkill(state) {
      return state.skill
    },
    getExp(state) {
      return state.exps
    },
    getPorto(state) {
      return state.portos
    }
  }
}
