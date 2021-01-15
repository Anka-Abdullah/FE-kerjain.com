<template>
  <div class="chat-page">
    <Navbar />
    <div class="chat">
      <b-container>
        <b-row>
          <b-col sm="3">Hii </b-col>
          <b-col sm="9">gengs </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footbar'
export default {
  name: 'Chat',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped>
.chat {
  padding-top: 100px;
  height: 1000px;
}
</style>
