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
            <!-- <img
              v-if="data.user_image"
              :src="'http://localhost:3000/workers/' + data.user_image"
              width="200"
              class="rounded-circle text-center ml-1 mb-2"
            /> -->
            <!-- <img v-if="image" :src="`${process.env.VUE_APP_URL}workers/${image}`" /> -->
            <img
              src="../assets/user.png"
              width="200"
              class="rounded-circle text-center ml-1 mb-2"
            />
            <input id="fileUpload" type="file" @change="handleFile" hidden />
            <button
              @click="chooseFile"
              class="button button-purple w-75 ml-4  my-4"
            >
              Choose photo
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
            <button class="button button-white w-75 mx-auto mb-4">
              Batal
            </button></b-row
          >
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
                <h6>Email</h6>
                <input type="text" v-model="data.user_email" />
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

export default {
  name: 'EditProfile',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      job: [{ text: 'Pilih satu job type', value: '' }, 'Fulltime', 'Freelance']
    }
  },
  created() {
    this.getUserById()
  },
  computed: {
    ...mapGetters({ user: 'setUser', data: 'setRecruiterId' })
  },
  methods: {
    ...mapGetters(['setUser']),
    ...mapActions([
      'getRecruiterByIds',
      'updateProfileRecruiters',
      'UpdateImageUsers'
    ]),
    getUserById() {
      this.getRecruiterByIds(this.user.user_id)
    },
    updateProfile() {
      const {
        user_name,
        user_field,
        user_location,
        user_email,
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
      data.append('user_email', user_email)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.updateProfileRecruiters(data)
        .then(result => {
          // this.updateImage()
          alert(result.data.msg)
        })
        .catch(err => {
          alert(err.data.msg)
        })
    },
    handleFile(event) {
      const user_image = event.target.files[0]
      this.UpdateImageUsers(user_image)
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    }
  }
}
</script>
<style scoped>
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
