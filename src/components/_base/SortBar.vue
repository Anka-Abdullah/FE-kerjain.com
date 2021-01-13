<template>
  <div>
    <b-navbar class="bg-white shadow mb-5 p-2 pl-4">
      <input type="text" class="w-100" placeholder="Search . . ." /><button
        class="button"
      >
        <b-icon icon="search" font-scale="1.5"></b-icon>
      </button>

      <b-navbar-nav class="ml-auto border-left pl-3">
        <b-nav-item-dropdown text="Sort" right>
          <b-dropdown-item href="#" class="py-2 border-bottom"
            >Sortir berdasarkan nama</b-dropdown-item
          >
          <b-dropdown-item href="#" class="py-2 border-bottom"
            >Sortir berdasarkan Skill</b-dropdown-item
          >
          <b-dropdown-item href="#" class="py-2 border-bottom"
            >Sortir berdasarkan Lokasi</b-dropdown-item
          >
          <b-dropdown-item href="#" class="py-2 border-bottom"
            >Sortir berdasarkan freelance</b-dropdown-item
          >
          <b-dropdown-item href="#" class="py-2"
            >Sortir berdasarkan fulltime</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <button class="button button-purple my-1">Search</button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {}
</script>
