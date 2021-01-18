<template>
  <div class="chat-page" style="background-color:#F7F7F7;">
    <Navbar :show="2" />
    <div class="chat">
      <b-container>
        <b-row>
          <b-col sm="3"><ListChat /></b-col>
          <b-col sm="9"><RoomChat /> </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footbar'
import ListChat from '../components/Chat/ListChat'
import RoomChat from '../components/Chat/RoomChat'
import { mapActions } from 'vuex'
export default {
  name: 'Chat',
  components: {
    Navbar,
    Footer,
    ListChat,
    RoomChat
  },
  created() {
    this.getAllChat()
  },
  methods: {
    ...mapActions(['getAllChat'])
  }
}
</script>
<style scoped>
.chat {
  padding-top: 100px;
  height: 1000px;
}

@media only screen and (max-width: 600px) {
  .chat {
    margin-bottom: 300px;
  }
}
</style>
