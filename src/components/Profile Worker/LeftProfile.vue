<template>
  <div>
    <div class="box-profile">
      <div class="centered">
        <img
          class="rounded-circle profile-img"
          v-if="data.user_image && image"
          :src="image"
        />
        <img
          class="rounded-circle profile-img"
          v-else-if="data.user_image"
          :src="`${url}workers/${data.user_image}`"
        />

        <img
          v-else
          src="../../../src/assets/user.png"
          class="rounded-circle text-center profile-img"
        />
        <!-- <img src="../../../src/assets/user_image.png" class="rounded-circle" /> -->
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
      <h6>{{ data.user_jobdesc }}</h6>
      <small v-if="data.user_location" class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>{{ data.user_location }},
        Indonesia
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
      <button @click="toHome()" class="button button-white w-100 mx-3 mb-4">
        Batal
      </button></b-row
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      image: '',
      url: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({ data: 'setUserId' })
  },
  methods: {
    ...mapActions(['updateProfileUsers', 'UpdateImageUsers']),
    updateProfile() {
      this.updateProfileUsers(this.data)
        .then(result => {
          alert(result.data.msg)
        })
        .catch(err => {
          alert(err.data.msg)
        })
    },
    handleFile(event) {
      const user_image = event.target.files[0]
      const data = new FormData()
      data.append('user_image', user_image)
      const setData = { data, id: this.data.user_id }
      this.UpdateImageUsers(setData).then(() => {
        this.image = URL.createObjectURL(user_image)
      })
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    },
    toHome() {
      this.$router.push('/')
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
