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
        <Card v-for="user in users" :key="user.user_id" :data="user" />
      </b-card>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="lg"
        align="center"
        class="my-5"
        :per-page="limit"
        @change="handlePageChange"
      ></b-pagination>
    </b-container>
    <Footbar />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
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
  },
  created() {
    this.getUsers()
  },
  computed: {
    ...mapGetters({
      users: 'getDataUsers',
      page: 'getPage',
      limit: 'getLimit',
      rows: 'getTotalRows',
      search: 'setSearch',
      sort: 'setSort'
    }),
    currentPage: {
      get() {
        return this.page
      },
      set(newPage) {
        return newPage
      }
    }
  },
  methods: {
    ...mapActions(['getUsers']),
    ...mapMutations(['resetPages', 'setPage', 'setSearch', 'setSort']),
    handlePageChange(e) {
      console.log(e)
      this.setPage(e)
      this.setSearch(this.search)
      this.setSort(this.sort)
      this.getUsers()
    }
    // resetPage() {
    //   this.resetPages()
    //   this.getUsers()
    // }
  }
}
</script>
