<template>
  <div class="chat-list">
    <div class="chat-head">
      <p class="chat-title">Chat</p>
    </div>
    <div class="chat-body">
      <div class="chats-empty" v-if="allChat.length == 0">
        <img class="chat-empty" src="../../assets/icon_chat_empty.png" alt="" />
        <p class="chat-empty-text">Belum Ada Chat</p>
      </div>
      <div
        class="chat-listing"
        v-for="(item, index) in allChat"
        :key="index"
        @click="sendData(item.room_chat, item.user_name)"
      >
        <img
          v-if="item.user_image"
          class="user-image"
          :src="`${url}fileUploadsApiKerjain/workers/${item.user_image}`"
          alt=""
        />
        <img
          v-else
          class="user-image"
          src="../../assets/gdpr_profile-picture 1.png"
          alt=""
        />
        <p class="user-name">{{ item.user_name }}</p>
        <p class="user-message">{{ item.lastMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'
import dotenv from 'dotenv'
dotenv.config()
export default {
  name: 'ListChat',
  data() {
    return {
      chat: 1,
      socket: io(process.env.VUE_APP_URL),
      oldRoom: '',
      url: process.env.VUE_APP_URL
    }
  },
  created() {
    this.socket.on('chatMessage', data => {
      console.log('dah Dapet data  nih')
      console.log(data)
      this.setChat(data)
    })
    console.log(this.allChat)
  },
  computed: {
    ...mapGetters({ allChat: 'getAllChats' })
  },
  methods: {
    ...mapActions(['getDetailChat']),
    ...mapMutations(['setReceiver', 'setChat', 'setReceiverImg']),
    sendData(id, userName) {
      this.setReceiverImg(this.allChat[0].user_image)
      if (this.oldRoom) {
        const newData = {
          ...{ oldRoom: this.oldRoom },
          ...{ room_chat: id }
        }
        this.socket.emit('changeRoom', newData)
        this.getDetailChat(id).then(() => {
          this.setReceiver(userName)
          this.oldRoom = id
        })
      } else {
        this.socket.emit('joinRoom', id)
        this.getDetailChat(id).then(() => {
          this.setReceiver(userName)
          this.oldRoom = id
        })
      }
    }
  }
}
</script>
<style scoped>
.chat-list {
  background-color: white;
  border: 1px solid #e2e5ed;
  border-radius: 10px;
}
.chat-head {
  margin-top: 20px;
  border-bottom: 1px solid #e2e5ed;
}
.chat-title {
  margin-left: 20px;
}
.chat-empty {
  margin-top: 50%;
  margin-left: 25%;
}
.chat-body {
  overflow-y: scroll;
  height: 483px;
  padding-bottom: 30px;
}
.chat-empty-text {
  font-size: 12px;
  margin-left: 25%;
  margin-top: 5px;
}
.user-image {
  margin-top: 20px;
  border-radius: 30px;
  margin-left: 20px;
}
.chat-listing {
  position: relative;
  padding-bottom: 10px;
  margin-top: -10px;
  cursor: pointer;
}
.chat-listing img {
  width: 35px;
  height: 35px;
}
.chat-listing:hover {
  background-color: rgb(228, 228, 228);
}
.chat-listing:focus {
  background-color: rgb(228, 228, 228);
}
.user-name {
  position: absolute;
  top: 25px;
  font-size: 14px;
  font-weight: 600;
  left: 70px;
}
.user-message {
  position: absolute;
  top: 40px;
  font-size: 12px;
  color: #9b9b9b;
  left: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}

/* scroll */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
