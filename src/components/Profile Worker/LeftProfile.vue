<template>
  <div>
    <div class="box-profile">
      <div class="centered">
        <!-- <img
      v-if="data.user_image"
      :src="'http://localhost:3000/workers/' + data.user_image"
      width="200"
      class="rounded-circle text-center ml-1 mb-2"
    /> -->
        <img src="../../../src/assets/user_image.png" class="rounded-circle" />
        <input id="fileUpload" type="file" @change="handleFile" hidden />
        <button
          @click="chooseFile"
          class="button btn-color button-light w-75  my-4"
        >
          <b-icon icon="pencil-fill"></b-icon>
          Edit
        </button>
      </div>
      <h4>
        <strong>{{ data.user_name }}</strong>
      </h4>
      <h6>{{ data.user_field }}</h6>
      <small class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>{{ data.user_location }}
      </small>
      <br />
      <small class="text-secondary">{{ data.user_job_type }}</small>
    </div>

    <b-row>
      <button
        @click.prevent="updateProfile()"
        class="button button-purple w-100 mx-3 my-4"
      >
        Simpan
      </button></b-row
    ><b-row>
      <button class="button button-white w-100 mx-3 mb-4">
        Batal
      </button></b-row
    >
    {{ data }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ data: 'getUserId' })
  },
  methods: {
    ...mapActions(['updateProfileUsers']),
    updateProfile() {
      const {
        user_name,
        user_job_type,
        user_jobdesc,
        user_location,
        user_workplace,
        user_description,
        user_instagram,
        user_phone,
        user_linkedin,
        user_github
      } = this.data
      const data = new FormData()
      data.append('user_name', user_name)
      data.append('user_job_type', user_job_type)
      data.append('user_jobdesc', user_jobdesc)
      data.append('user_location', user_location)
      data.append('user_workplace', user_workplace)
      data.append('user_description', user_description)
      data.append('user_instagram', user_instagram)
      data.append('user_phone', user_phone)
      data.append('user_linkedin', user_linkedin)
      data.append('user_github', user_github)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.updateProfileUsers(data)
        .then(result => {
          alert(result.data.msg)
        })
        .catch(err => {
          alert(err.data.msg)
        })
    },
    handleFile(event) {
      this.user_image = event.target.files[0]
      // this.updateImage()
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    }
  }
}
</script>
<style scoped>
.box-profile {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
}
.centered {
  text-align: center;
}
img {
  width: 150px;
  height: 150px;
}
.btn-color {
  color: #9b9b9b;
}
</style>
