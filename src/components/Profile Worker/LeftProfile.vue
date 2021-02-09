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
    <b-row>
      <button
        @click="$bvModal.show('bv-modal-example')"
        class="button btn-secondary w-100 mx-3 mb-4"
      >
        Ubah password
      </button></b-row
    >
    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title> Ubah password </template>
      <div class="d-block">
        <h6>Password baru</h6>
        <b-form-input
          type="password"
          v-model="form.newPassword"
          placeholder="Masukkan password baru"
          required
        ></b-form-input>
        <br />
        <h6>Konfirmasi password baru</h6>
        <b-form-input
          type="password"
          v-model="form.confirmPassword"
          placeholder="Konfirmasi password baru"
          required
        ></b-form-input>
      </div>
      <b-button
        class="mt-3"
        variant="outline-primary"
        block
        @click="changePass()"
        >Ubah password</b-button
      >
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Batal</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  data() {
    return {
      image: '',
      url: process.env.VUE_APP_URL,
      form: {
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  computed: {
    ...mapGetters({ data: 'setUserId' })
  },
  methods: {
    ...mapActions([
      'updateProfileUsers',
      'UpdateImageUsers',
      'changePasswords'
    ]),
    updateProfile() {
      this.updateProfileUsers(this.data)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
    },
    handleFile(event) {
      const user_image = event.target.files[0]
      const data = new FormData()
      data.append('user_image', user_image)
      const setData = { data, id: this.data.user_id }
      this.UpdateImageUsers(setData)
        .then(result => {
          this.image = URL.createObjectURL(user_image)
          this.successAlert(result.data.msg)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    },
    toHome() {
      this.$router.push('/')
    },
    changePass() {
      this.changePasswords(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
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
  width: 200px;
  height: 200px;
}
.btn-color {
  color: #9b9b9b;
}
</style>
