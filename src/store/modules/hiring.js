import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    roomChat: 0,
    allChat: [],
    detailChat: [],
    receiver: '',
    userById: [],
    skillsUser: [],
    userFrom: {},
    notif: {},
    countNotif: 0
  },
  mutations: {
    setAllChat(state, payload) {
      state.allChat = payload
    },
    setRoomChat(state, payload) {
      state.roomChat = payload
    },
    setDetailChat(state, payload) {
      state.detailChat = payload
    },
    setReceiver(state, payload) {
      state.receiver = payload
    },
    setUserById(state, payload) {
      state.userById = payload
    },
    setSkillsUser(state, payload) {
      state.skillsUser = payload.skills.split(',')
    },
    setUserFrom(state, payload) {
      state.skillsUser = payload
    },
    setChat(state, payload) {
      state.detailChat.push(payload)
      console.log(state.detailChat)
    },
    setNotifById(state, payload) {
      state.notif = payload
    },
    setCountNotif(state, payload) {
      state.countNotif = payload
    }
  },
  actions: {
    sendJobInvitations(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}hiring/jobinvitation`, payload)
          .then(result => {
            console.log(result)
            resolve(result.data)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    getAllChat(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}hiring/getallchat`)
          .then(result => {
            context.commit('setAllChat', result.data.data)
            resolve(result.data.data)
          })
          .catch(err => {
            reject(new Error(err.data.msg))
          })
      })
    },
    getDetailChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}hiring/getdetailchat/${payload}`)
          .then(result => {
            context.commit('setDetailChat', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    sendChatting(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${process.env.VUE_APP_URL}hiring/getdetailchat/${payload.room_chat}`,
            payload
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getUserInformation(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/${payload}`)
          .then(result => {
            context.commit('setUserById', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getSkillById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}user/skill/${payload}`)
          .then(result => {
            context.commit('setSkillsUser', result.data.data[0])
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getUserFrom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}workers/${payload}`)
          .then(result => {
            context.commit('setUserById', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getNotifById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}hiring/notif/get/${payload}`)
          .then(result => {
            context.commit('setNotifById', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getCountNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}hiring/notif/count/${payload}`)
          .then(result => {
            context.commit('setCountNotif', result.data.data[0].total)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    postNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}hiring/notif`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}hiring/notif/patch/${payload}`,
            payload.setData
          )
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
    getAllChats(state) {
      return state.allChat
    },
    getRoomChat(state) {
      return state.roomChat
    },
    getDetailChat(state) {
      return state.detailChat
    },
    getReceiver(state) {
      return state.receiver
    },
    getUserById(state) {
      return state.userById
    },
    getSkillsUser(state) {
      return state.skillsUser
    },
    getUserFrom(state) {
      return state.userFrom
    },
    getNotifById(state) {
      return state.notif
    },
    getCountNotif(state) {
      return state.countNotif
    }
  }
}
