<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top" class="b-navbar shadow">
      <b-navbar-brand href="#">
        <h3 class="m-0">
          <b-icon icon="exclude" class="mr-2"></b-icon>Kerjain
        </h3></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <button class="button  button-white">Masuk</button>
          <button class="button button-purple">Daftar</button>
          <h5 class="m-0 mt-1">
            <b-icon icon="bell"></b-icon
            ><b-icon icon="chat-left-dots" class="mx-3"></b-icon>
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
          </h5>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: 1
    }
  }
}
</script>
<style scoped>
.b-navbar {
  padding: 8px 60px;
  background-color: #ffffff !important;
}
</style>
