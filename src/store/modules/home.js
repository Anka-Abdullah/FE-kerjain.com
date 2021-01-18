import axios from 'axios'

export default {
  state: {
    users: [],
    limit: 2,
    page: 1,
    search: '',
    sort: '',
    totalRows: null
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload.data
      state.totalRows = payload.pagination.totalData
    },
    resetPages(state) {
      state.page = 1
    },
    setPage(state, payload) {
      state.page = payload
    },
    setSearch(state, payload) {
      state.search = payload
    },
    setSort(state, payload) {
      state.sort = payload
    }
  },
  actions: {
    getUsers({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/home/home?${
              state.sort !== '' ? 'sort=' + state.sort : ''
            }${state.search !== '' ? '&search=' + state.search : ''}&page=${
              state.page
            }&limit=${state.limit}`
          )
          .then(result => {
            resolve(result)
            commit('setUsers', result.data)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    }
  },
  getters: {
    getPage: state => state.page,
    getLimit: state => state.limit,
    getDataUsers(state) {
      return state.users
    },
    getTotalRows: state => state.totalRows,
    getShow: state => state.isShow,
    setSearch: state => state.search,
    setSort: state => state.sort
  }
}
