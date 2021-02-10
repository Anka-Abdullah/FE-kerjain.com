import axios from 'axios'
import router from '../../router/index'

export default {
  state: {
    user: {},
    userDetail: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    },
    setUserDetail(state, payload) {
      state.userDetail = payload
    }
  },
  actions: {
    loginUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}workers/login`, payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    loginRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}recruiter/login`, payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    getUserDetail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/${payload}`)
          .then(result => {
            context.commit('setUserDetail', result.data.data[0])
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/loginuser')
    },
    interceptorRequest(context) {
      console.log('interceptor request works!')
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      console.log('interceptor request works!')
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (
            (error.response.data.status === 403 &&
              error.response.data.status === 'invalid token') ||
            error.response.data.status === 'invalid signature' ||
            error.response.data.status === 'jwt expired' ||
            error.response.data.status === 'jwt malformed'
          ) {
            context.dispatch('logout')
            alert(error.response.data.msg)
          }
          return Promise.reject(error)
        }
      )
    },
    verificationEmail(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}workers/activate/email/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    setUser(state) {
      return state.user
    },
    getUserDetail(state) {
      return state.userDetail
    },
    isLogin(state) {
      return state.token !== null // false
    },
    isRecruiter(state) {
      return state.user.user_role === 1
    },
    isWorker(state) {
      return state.user.user_role === 0
    }
  }
}
