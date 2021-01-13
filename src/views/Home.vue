<template>
  <div class="home">
    <Navbar />
    <b-container style="padding-top: 90px">
      <h1>Home</h1>
    </b-container>
    <Footbar />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footbar
  }
}
</script>
