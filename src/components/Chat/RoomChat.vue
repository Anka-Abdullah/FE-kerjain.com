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
    <b-col class="p-4">
      <textarea class="w-50 my-3" rows="1">
          Anka
        </textarea
      >
      <textarea class="w-50 my-3" rows="1">
          Anka
        </textarea
      >
    </b-col>
    <!-- <div class="room-body">
      <div class="message-sender align-text-bottom">
        Hello kjakjkaj
      </div>
      <div class="message-sender">
        guys
      </div>
    </div> -->
    <!-- <div class="room-body2">
      <div class="message-sender align-text-bottom">
        Hello
      </div>
      <div class="message-sender">
        guys
      </div>
    </div> -->
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
</style>
