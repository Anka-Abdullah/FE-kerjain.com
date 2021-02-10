<template>
  <div
    class="company"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0" class="text-center">
      <!-- <img
        src="../assets/user.png"
        width="200"
        class="rounded-circle text-center ml-1 mb-2"
      /> -->
      <img
        class="rounded-circle profile-img"
        v-if="company.user_image"
        :src="`${url}workers/${company.user_image}`"
      />

      <img
        v-else
        src="../assets/user.png"
        class="rounded-circle text-center profile-img"
      />

      <h3 class="mt-2">
        <strong>{{ company.user_name }}</strong>
      </h3>
      <h6 class="text-secondary">{{ company.user_field }}</h6>
      <h6 class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>{{ company.user_location }}
      </h6>
      <b-col class="w-50 mx-auto mt-3">
        <h6 class="text-secondary">
          {{ company.user_description }}
        </h6>
        <router-link to="/EditProfile">
          <button class="button button-purple w-75 mt-3">
            Edit Profile
          </button>
        </router-link>
        <h6 class="text-secondary mt-4">
          <b-icon icon="envelope" class="mr-2"></b-icon>{{ company.user_email }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="instagram" class="mr-2"></b-icon
          >{{ company.user_instagram }}
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="telephone" class="mr-2"></b-icon
          >{{ company.user_phone }}
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="linkedin" class="mr-2"></b-icon
          >{{ company.user_linkedin }}
        </h6>
      </b-col>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Company',
  data() {
    return {
      url: process.env.VUE_APP_URL
    }
  },
  components: {
    Navbar,
    Footbar
  },
  created() {
    this.getCompanyVuex(this.user.user_id)
  },
  computed: {
    ...mapGetters({ user: 'setUser', company: 'getCompanyData' })
  },
  methods: {
    ...mapActions(['getCompanyVuex'])
  }
}
</script>
<style scooped>
.profile-img {
  width: 160px;
  height: 160px;
  margin-top: 10px;
  object-fit: cover;
}
</style>
