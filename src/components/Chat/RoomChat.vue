<template>
  <div class="room-chat">
    <div class="room-head">
      <img
        class="user-image"
        src="../../assets/gdpr_profile-picture 1.png"
        alt=""
      />
      <p class="user-name">User Name</p>
    </div>
    <div class="room-body"></div>
    <div class="chat-type">
      <b-form-textarea
        id="textarea"
        class="chat-area"
        v-model="text"
        placeholder="Enter something..."
        rows="1"
        max-rows="6"
        style="overflow:hidden"
      ></b-form-textarea>
    </div>
    <button class="send-button">
      <img src="../../assets/send-icon.png" alt="" />
    </button>
  </div>
</template>
<script>
export default {
  name: 'RoomChat',
  data() {
    return {}
  },
  methods: {}
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
.room-body {
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-end;
  bottom: 100px;
  position: absolute;
  right: 40px;
}
.room-body2 {
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-end;
  bottom: 100px;
  position: absolute;
  left: 40px;
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
@media only screen and (max-width: 600px) {
  .room-chat {
    margin-top: 60px;
    height: 500px;
  }
}
</style>
