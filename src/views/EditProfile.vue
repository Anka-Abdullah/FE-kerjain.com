<template>
  <div
    class="editproile"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0">
      <b-row>
        <b-col lg="3" sm="12"
          ><b-card class="border-0">
            <div class="img-wrapper text-center">
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
                src="../assets/user.png"
                class="rounded-circle text-center profile-img"
              />
            </div>

            <input id="fileUpload" type="file" @change="handleFile" hidden />
            <button
              @click="chooseFile"
              class="button btn-color button-light w-75  my-4"
            >
              <b-icon icon="pencil-fill"></b-icon>
              Edit
            </button>
            <h4>
              <strong>{{ data.user_name }}</strong>
            </h4>
            <small class="text-secondary">{{ data.user_field }}</small
            ><br />
            <small class="text-secondary">
              <b-icon
                v-if="data.user_location"
                icon="geo-alt"
                class="mr-2"
              ></b-icon
              >{{ data.user_location }}
            </small>
          </b-card>
          <b-row>
            <button
              class="button button-purple w-75 mx-auto my-4"
              @click.prevent="updateProfile()"
            >
              Simpan
            </button></b-row
          ><b-row>
            <button
              @click.prevent="askToCancel()"
              class="button button-white w-75 mx-auto mb-4"
            >
              Batal
            </button></b-row
          >
          <b-row>
            <button
              class="button button-purple w-75 mx-auto my-4"
              id="show-btn"
              @click="$bvModal.show('bv-modal-example')"
            >
              Ubah Password
            </button>
            <b-modal id="bv-modal-example" hide-footer>
              <template #modal-title>
                Ubah Password
              </template>
              <div class="d-block text-left">
                <b-form-group label="Password Baru :" label-for="pass">
                  <b-form-input
                    id="pass"
                    type="password"
                    v-model="form.newPassword"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Konfirmasi Password Baru :"
                  label-for="confirm-pass"
                >
                  <b-form-input
                    id="confirm-pass"
                    type="password"
                    v-model="form.confirmPassword"
                  ></b-form-input>
                </b-form-group>
                <div style="text-align:right">
                  <button class="button-purple" @click="changePassword()">
                    Simpan
                  </button>
                </div>
              </div>
            </b-modal>
          </b-row>
        </b-col>
        <b-col lg="9" sm="12">
          <b-card class="shadow bg-white pb-5">
            <b-row class="border-bottom pl-3">
              <h4><strong>Data Diri</strong></h4>
            </b-row>
            <b-container class="py-4">
              <form>
                <h6>Nama Perusahaan</h6>
                <input type="text" v-model="data.user_name" />
                <h6>Bidang</h6>
                <input type="text" v-model="data.user_field" />
                <h6>Kota</h6>
                <input type="text" v-model="data.user_location" />
                <h6>Deskripsi singkat</h6>
                <textarea
                  v-model="data.user_description"
                  class="w-100"
                  rows="5"
                ></textarea>
                <h6>Instagram</h6>
                <input type="text" v-model="data.user_instagram" />
                <h6>Nomor telepon</h6>
                <input type="number" v-model="data.user_phone" />
                <h6>Linkedin</h6>
                <input type="text" v-model="data.user_linkedin" />
              </form>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import { mapActions, mapGetters } from 'vuex'
import { alert } from '../mixins/alert'
export default {
  mixins: [alert],
  name: 'EditProfile',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      job: [
        { text: 'Pilih satu job type', value: '' },
        'Fulltime',
        'Freelance'
      ],
      image: '',
      url: process.env.VUE_APP_URL,
      form: {
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  created() {
    this.getRecruiterByIds(this.user.user_id)
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      data: 'setRecruiterId'
    })
  },
  methods: {
    ...mapActions([
      'getRecruiterByIds',
      'updateProfileRecruiters',
      'UpdateImageUsers',
      'patchPasswordAllUserVuex'
    ]),
    updateProfile() {
      const {
        user_name,
        user_field,
        user_location,
        user_description,
        user_instagram,
        user_phone,
        user_linkedin
      } = this.data
      const data = new FormData()
      data.append('user_name', user_name)
      data.append('user_field', user_field)
      data.append('user_location', user_location)
      data.append('user_description', user_description)
      data.append('user_instagram', user_instagram)
      data.append('user_phone', user_phone)
      data.append('user_linkedin', user_linkedin)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.updateProfileRecruiters(data)
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
      const setData = { data, id: this.user.user_id }
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
    askToCancel() {
      this.$router.push('/')
    },
    changePassword() {
      this.patchPasswordAllUserVuex({ id: this.user.user_id, data: this.form })
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })

      this.form.newPassword = ''
      this.form.confirmPassword = ''
    }
  }
}
</script>
<style scoped>
.profile-img {
  width: 160px;
  height: 160px;
  margin-top: 10px;
}
input {
  border: 1px solid #afafaf;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
}
form h6 {
  font-weight: 500;
  margin-top: 30px;
  color: #818181;
  size: 24px;
}
</style>
