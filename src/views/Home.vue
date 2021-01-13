<template>
  <div class="home bg-light">
    <Navbar :show="2" />
    <b-container style="padding-top: 120px">
      <Sort />
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
import Sort from '../components/_base/SortBar'
import Card from '../components/CardList'
import Footbar from '../components/_base/Footbar'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sort,
    Footbar,
    Card
  }
}
</script>
