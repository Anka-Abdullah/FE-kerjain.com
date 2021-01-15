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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListChat',
  data() {
    return {
      chat: 0
    }
  }
}
</script>
<style scoped>
.chat-list {
  height: 583px;
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
.chat-empty-text {
  font-size: 12px;
  margin-left: 25%;
  margin-top: 5px;
}
</style>
