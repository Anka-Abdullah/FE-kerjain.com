<template>
  <div class="chat-list">
    <div class="chat-head">
      <p class="chat-title">Chat</p>
    </div>
    <div class="chat-body">
      <div class="chats-empty" v-if="chat == 0">
        <img class="chat-empty" src="../../assets/icon_chat_empty.png" alt="" />
        <p class="chat-empty-text">Belum Ada Chat</p>
      </div>
      <div class="chat-listing">
        <img
          class="user-image"
          src="../../assets/gdpr_profile-picture 1.png"
          alt=""
        />
        <p class="user-name">user Name</p>
        <p class="user-message">Lorem ipsum dolor</p>
      </div>
      <div class="chat-listing">
        <img
          class="user-image"
          src="../../assets/gdpr_profile-picture 1.png"
          alt=""
        />
        <p class="user-name">user Name</p>
        <p class="user-message">Lorem ipsum dolor</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListChat',
  data() {
    return {
      chat: 1
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
  cursor: pointer;
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
