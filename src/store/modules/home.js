import axios from 'axios'

export default {
  state: {
    users: [],
    limit: 5,
    page: 1,
    totalRows: null,
    isShow: false
  },
  mutations: {
    setUsers(state, payload) {
      state.isShow = true
      state.users = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    resetPages(state) {
      state.page = 1
    }
  },
  actions: {
    getUsers({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${state.page}${state.limit}`)
          .then(result => {
            commit('setUsers', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    }
  },
  getters: {
    getPage(state) {
      return state.page
    },
    getLimit(state) {
      return state.limit
    },
    getDataUsers(state) {
      return state.users
    },
    getTotalRows(state) {
      return state.totalRows
    },
    getShow(state) {
      return state.isShow
    }
  }
}
