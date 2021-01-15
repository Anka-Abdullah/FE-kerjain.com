<template>
  <div class="chat-page" style="background-color:#F7F7F7;">
    <Navbar />
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
export default {
  name: 'Chat',
  components: {
    Navbar,
    Footer,
    ListChat,
    RoomChat
  }
}
</script>
<style scoped>
.chat {
  padding-top: 100px;
  height: 1000px;
}
</style>
