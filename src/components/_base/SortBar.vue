<template>
  <div>
    <b-navbar class="bg-white shadow mb-5 p-2 pl-4">
      <input
        type="text"
        placeholder="Search . . ."
        v-model="searchData"
        @keyup.prevent="get"
        required
        class="w-100"
      />
      <button class="button" @click="get">
        <b-icon icon="search" font-scale="1.5"></b-icon>
      </button>
      <b-navbar-nav class="ml-auto border-left pl-3">
        <b-nav-item-dropdown text="Sort" right>
          <b-dropdown-item
            href="#"
            class="py-2 border-bottom"
            @click="sort('user_name')"
            >Sortir berdasarkan nama</b-dropdown-item
          >
          <b-dropdown-item
            href="#"
            class="py-2 border-bottom"
            @click="sort('skill')"
            >Sortir berdasarkan Skill</b-dropdown-item
          >
          <b-dropdown-item
            href="#"
            class="py-2 border-bottom"
            @click="sort('user_location')"
            >Sortir berdasarkan Lokasi</b-dropdown-item
          >
          <b-dropdown-item
            href="#"
            class="py-2 border-bottom"
            @click="sort('freelance')"
            >Sortir berdasarkan freelance</b-dropdown-item
          >
          <b-dropdown-item href="#" class="py-2" @click="sort('fulltime')"
            >Sortir berdasarkan fulltime</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <button class="button button-purple my-1" @click="get">Search</button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      searchData: ''
    }
  },
  methods: {
    ...mapActions(['getUsers']),
    ...mapMutations(['setSearch', 'resetPages', 'setSort']),
    get() {
      this.resetPages()
      this.setSearch(this.searchData)
      this.getUsers()
    },
    sort(s) {
      this.resetPages()
      this.setSort(s)
      this.getUsers()
    }
  }
}
</script>
