import axios from 'axios'

export default {
  state: {
    users: [],
    limit: 6,
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
    changePage(state, payload) {
      state.page = payload
    },
    resetPages(state) {
      state.page = 1
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
            resolve(result.data)
            commit('setUsers', result.data)
            console.log(state.users)
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
    setDataUsers: state => state.users,
    getTotalRows: state => state.totalRows,
    getShow: state => state.isShow,
    setSearch: state => state.search,
    setSort: state => state.sort
  }
}
