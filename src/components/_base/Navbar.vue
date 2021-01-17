<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top" class="b-navbar shadow">
      <b-container>
        <b-navbar-brand href="#">
          <h3 class="m-0">
            <b-icon icon="exclude" class="mr-2"></b-icon>Kerjain
          </h3></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/loginuser"
              ><button class="button  button-white my-1" v-if="show === 1">
                Masuk
              </button></router-link
            >
            <router-link to="/registeruser"
              ><button class="button button-purple my-1" v-if="show === 1">
                Daftar
              </button></router-link
            >
            <h5 class="m-0 mt-1 text-center" v-if="show === 2">
              <router-link to=""><b-icon icon="bell"></b-icon></router-link
              ><router-link to="/chat"
                ><b-icon
                  icon="chat-left-dots"
                  class="mx-4"
                ></b-icon></router-link
              ><router-link to="/profile"
                ><b-avatar src="https://placekitten.com/300/300"></b-avatar
              ></router-link>
            </h5>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: {
    show: Number
  }
}
</script>
<style scoped>
.b-navbar {
  padding: 8px 60px;
  background-color: #ffffff !important;
}
a {
  color: black;
}
@media (max-width: 600px) {
  .b-navbar {
    padding: 8px 10px;
  }
}
</style>
