<template>
  <div
    class="editproile"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0">
      <b-row>
        <b-col lg="3" sm="12"
          ><Card />
          <b-row>
            <button class="button button-purple w-75 mx-auto my-4">
              Simpan
            </button></b-row
          ><b-row>
            <button class="button button-white w-75 mx-auto mb-4">
              Batal
            </button></b-row
          ></b-col
        >
        <b-col lg="9" sm="12">
          <b-card class="shadow bg-white pb-3">
            <b-row class="border-bottom pl-3">
              <h4><strong>Data Diri</strong></h4>
            </b-row>
            <b-container class="py-4">
              <form>
                <h6>Nama lengkap</h6>
                <input type="text" placeholder="Masukkan nama lengkap" />
                <h6>Job desk</h6>
                <input type="text" placeholder="Masukkan job desk" />
                <h6>Domisili</h6>
                <input type="text" placeholder="Masukkan domisili" />
                <h6>Tempat kerja</h6>
                <input type="text" placeholder="Masukkan tempat kerja" />
                <h6>Deskripsi singkat</h6>
                <textarea
                  class="w-100"
                  rows="5"
                  placeholder="Masukkan deskripsi singkat"
                ></textarea>
                <h6>Instagram</h6>
                <input type="text" placeholder="Masukkan nama instagram" />
                <h6>Nomor Telepon</h6>
                <input type="number" placeholder="Masukkan nomor telepon" />
                <h6>Linkedin</h6>
                <input type="text" placeholder="Masukkan nama LinkedIn" />
                <h6>Github</h6>
                <input type="text" placeholder="Masukkan nama Github" />
              </form>
            </b-container>
          </b-card>
          <br />
          <b-card class="shadow bg-white pb-3">
            <b-row class="border-bottom pl-3">
              <h4><strong>Skill</strong></h4>
            </b-row>
            <b-container class="flex py-4">
              <form>
                <input
                  v-model="skill"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                />
              </form>
              <button @click="addSkill" class="btn-def">Simpan</button>
            </b-container>
            <b-container>
              <b-button-group v-for="(item, index) in skills" :key="index">
                <b-button variant="warning" size="sm">{{
                  item.skill_name
                }}</b-button>
                <b-button @click="destroySkill(item.skill_id)" size="sm"
                  >x</b-button
                >
              </b-button-group>
            </b-container>
          </b-card>
          <br />
          <b-card class="shadow bg-white pb-3">
            <b-row class="border-bottom pl-3">
              <h4><strong>Pengalaman kerja</strong></h4>
            </b-row>
            <b-container class="py-4">
              <form>
                <h6>Posisi</h6>
                <input type="text" placeholder="Masukkan posisi" />
                <div class="flex">
                  <div class="left">
                    <h6>Nama Perusahaan</h6>
                    <input type="text" placeholder="Masukkan nama perusahaan" />
                  </div>
                  <div class="right">
                    <h6>Bulan/tahun</h6>
                    <input type="text" placeholder="Masukkan bulan/tahun" />
                  </div>
                </div>
                <h6>Deskripsi singkat</h6>
                <textarea
                  class="w-100"
                  rows="5"
                  placeholder="Deskripsikan pekerjaan anda"
                ></textarea>
                <hr />
              </form>
              <button class="btn-bottom">
                <strong>Tambah Pengalaman Kerja</strong>
              </button>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import { alert } from '../mixins/alert'
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Card from '../components/profile/CardProfile'
import Footbar from '../components/_base/Footbar'

export default {
  mixins: [alert],
  name: 'EditProfileUser',
  components: {
    Navbar,
    Footbar,
    Card
  },
  data() {
    return {
      id: '',
      skill: ''
    }
  },
  computed: {
    ...mapGetters({ skills: 'getSkill' })
  },
  methods: {
    ...mapActions(['getSkill', 'postSkill', 'deleteSkill']),
    addSkill() {
      const data = {
        user_id: this.id,
        skill_name: this.skill
      }
      this.postSkill(data)
    },
    destroySkill(id) {
      const data = {
        user_id: this.id,
        skill_id: id
      }
      this.deleteSkill(data)
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getSkill(this.id)
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
.flex {
  display: flex;
  justify-content: space-between;
}
.flex form {
  width: 100%;
  margin-right: 30px;
}
.left {
  flex: 1;
  padding-right: 30px;
}
.right {
  flex: 1;
}
.btn-bottom {
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  color: #fbb017;
  border: 4px solid #fbb017;
}
.btn-def {
  color: white;
  background-color: #fbb017;
  border-radius: 10px;
  border: none;
  padding: 0 20px;
}
</style>
