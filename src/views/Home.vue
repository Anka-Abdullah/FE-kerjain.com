<template>
  <div class="home bg-light pt-5">
    <Navbar :show="2" />
    <b-container fluid style="background: #5e50a1">
      <b-container>
        <h3 class="text-white py-3 mt-2"><strong>Top Jobs</strong></h3>
      </b-container>
    </b-container>
    <b-container class="pt-5">
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
