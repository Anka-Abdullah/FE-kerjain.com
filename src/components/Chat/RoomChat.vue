<template>
  <div class="room-chat" v-bind="chat.room_chat != ''">
    <div class="room-head">
      <img
        class="user-image"
        src="../../assets/gdpr_profile-picture 1.png"
        alt=""
      />
      <p class="user-name">{{ receiver }}</p>
    </div>
    <div class="chat-body">
      <div class="" v-for="(item, index) in detailChat" :key="index">
        <p class="text-chatting" v-if="item.user_id_from == user.user_id">
          {{ item.chat_content }}
        </p>
        <p class="text-chatting-to" v-else>{{ item.chat_content }}</p>
        <p class="user-detail" v-if="item.user_id_from == user.user_id">
          You <br />
        </p>
        <p class="user-detail-to" v-else>{{ receiver }} <br /></p>
      </div>
    </div>
    <div class="chat-type">
      <b-form-textarea
        id="textarea"
        class="chat-area"
        v-model="chat.chat_content"
        v-bind="chat.room_chat != ''"
        placeholder="Enter something..."
        rows="1"
        max-rows="6"
        style="overflow:hidden"
      ></b-form-textarea>
    </div>
    <button @click="chatSend" class="send-button">
      <img src="../../assets/send-icon.png" alt="" />
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'RoomChat',
  data() {
    return {
      chat: {
        chat_content: '',
        user_id_to: 0,
        room_chat: 0
      }
    }
  },
  created() {},
  computed: {
    ...mapGetters({
      user: 'setUser',
      detailChat: 'getDetailChat',
      receiver: 'getReceiver'
    })
  },
  methods: {
    ...mapActions(['sendChatting']),
    chatSend() {
      let count = this.detailChat.length
      this.chat.user_id_to = this.detailChat[count - 1].user_id_to
      this.chat.room_chat = this.detailChat[0].room_chat
      this.sendChatting(this.chat)
    }
  }
}
</script>
<style scoped>
textarea {
  display: block;
  left: 0;
}
.room-chat {
  background-color: white;
  height: 543px;
  padding-top: 10px;
  position: relative;
}
.room-head {
  border-bottom: 1px solid #e2e5ed;
  position: relative;
  padding-bottom: 12px;
}
.user-image {
  margin-left: 34px;
  border-radius: 40px;
}
.user-name {
  position: absolute;
  top: 10px;
  left: 85px;
}
.chat-body {
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  height: 400px;
  padding-bottom: 40px;
}
.text-chatting {
  font-size: 13px !important;
  max-width: 280px;
  margin-right: 20px;
  float: right;
}
.text-chatting-to {
  font-size: 13px !important;
  max-width: 280px;
  float: left;
  margin-left: 20px;
}
.chat-area {
  position: absolute;
  bottom: 35px;
  border-radius: 30px;
  overflow-y: hidden;
  margin-left: 30px;
  padding-top: 18px;
  padding-left: 20px;
  width: 85%;
}
.send-button {
  position: absolute;
  bottom: 45px;
  height: 50px;
  width: 50px;
  border-radius: 40px;
  background-color: #5e50a1;
  border: none;
  right: 30px;
}
.user-detail {
  font-size: 11px;
  font-weight: 700;
  float: right;
  margin-right: 20px;
}
.user-detail-to {
  font-size: 11px;
  font-weight: 700;
  float: left;
  margin-left: -20px;
}
@media (max-width: 600px) {
  .room-chat {
    margin-top: 60px;
    height: 500px;
  }
}
</style>
