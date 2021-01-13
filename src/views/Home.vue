<template>
  <div class="home">
    <Navbar :show="2" />
    <b-container style="padding-top: 90px">
      <b-card class="shadow m-0 border-0">
        <Card />
        <Card />
        <Card />
      </b-card>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="lg"
        align="center"
        class="my-5"
      ></b-pagination>
    </b-container>
    <Footbar />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Card from '../components/CardList'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footbar,
    Card
  }
}
</script>
