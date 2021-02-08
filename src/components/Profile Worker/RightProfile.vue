<template>
  <div>
    <div class="card">
      <div class="border-bottom pl-4 mb-2">
        <h4><strong>Data Diri</strong></h4>
      </div>
      <b-container class="pad">
        <h6>Nama lengkap</h6>
        <b-form-input
          type="text"
          v-model="data.user_name"
          placeholder="Enter name"
          required
        ></b-form-input>
        <h6>Tipe pekerjaan</h6>
        <b-form-select
          v-model="data.user_job_type"
          :options="job"
          required
        ></b-form-select>
        <h6>Job desk</h6>
        <b-form-input
          type="text"
          v-model="data.user_jobdesc"
          placeholder="Masukkan job desk"
          required
        ></b-form-input>
        <h6>Domisili</h6>
        <b-form-input
          type="text"
          v-model="data.user_location"
          placeholder="Masukkan domisili"
          required
        ></b-form-input>
        <h6>Tempat kerja</h6>
        <b-form-input
          type="text"
          v-model="data.user_workplace"
          placeholder="Masukkan tempat kerja"
          required
        ></b-form-input>
        <h6>Deskripsi singkat</h6>
        <b-form-textarea
          v-model="data.user_description"
          rows="3"
          max-rows="6"
          placeholder="Masukkan deskripsi singkat"
          required
        ></b-form-textarea>
        <h6>Nomor Telepon</h6>
        <b-form-input
          type="text"
          v-model="data.user_phone"
          placeholder="Masukkan nomor telefon"
          required
        ></b-form-input>
        <h6>Instagram</h6>
        <b-form-input
          type="text"
          v-model="data.user_instagram"
          placeholder="Masukkan nama akun instagram"
          required
        ></b-form-input>
        <h6>Linkedin</h6>
        <b-form-input
          type="text"
          v-model="data.user_linkedin"
          placeholder="Masukkan nama akun LinkedIn"
          required
        ></b-form-input>
        <h6>Github</h6>
        <b-form-input
          type="text"
          v-model="data.user_github"
          placeholder="Masukkan nama akun github"
          required
        ></b-form-input>
      </b-container>
    </div>
    <br />
    <div class="card">
      <div class="border-bottom pl-4 mb-4">
        <h4><strong>Skill</strong></h4>
      </div>
      <b-container class="pad">
        <div class="flex-comp">
          <b-form-input
            type="text"
            v-model="skill"
            placeholder="Masukkan skill"
            required
          ></b-form-input>
          <button @click="addSkill" class="btn-def">Simpan</button>
        </div>
        <br />
        <b-button-group v-for="(item, index) in skills" :key="index">
          <b-button variant="warning" size="sm">{{ item.skill_name }}</b-button>
          <b-button class="mr-3" @click="destroySkill(item.skill_id)" size="sm"
            >x</b-button
          >
        </b-button-group>
      </b-container>
    </div>
    <br />
    <div class="card">
      <div class="border-bottom pl-4 mb-4">
        <h4><strong>Pengalaman Kerja</strong></h4>
      </div>
      <b-container class="pad">
        <h6>Posisi</h6>
        <b-form-input
          type="text"
          placeholder="Masukkan posisi"
          required
        ></b-form-input>
        <h6>Nama perusahaan</h6>
        <b-form-input
          type="text"
          placeholder="Masukkan nama perusahaan"
          required
        ></b-form-input>
        <div class="flex-comp">
          <div class="w-50 pr-2">
            <h6>Bulan - tahun mulai</h6>
            <input v-model="month" class="month" type="month" />
          </div>
          <div class="w-50 pl-2">
            <h6>Bulan - tahun selesai</h6>
            <input v-model="month" class="month" type="month" />
            {{ month }}
          </div>
        </div>
        <h6>Deskripsi singkat</h6>
        <b-form-textarea
          rows="4"
          max-rows="6"
          placeholder="Deskripsikan pekerjaan anda"
          required
        ></b-form-textarea>
        <hr class="my-4" />
        <button class="btn-bottom">
          <strong>Tambah Pengalaman Kerja</strong>
        </button>
      </b-container>
    </div>
    <div>
      <h1>Finds</h1>
      <div v-for="(find, index) in finds" :key="index">
        <input v-model="find.value" type="text" placeholder="asdsa" />
      </div>
      <button @click="addFind">
        New Find
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      job: [
        { text: 'Pilih satu job type', value: null },
        'Fulltime',
        'Freelance'
      ],
      id: '',
      skill: '',
      month: '',
      finds: []
    }
  },
  created() {
    this.getSkill(this.user.user_id)
  },
  mounted() {
    this.getUserByIds(this.user.user_id)
  },
  computed: {
    ...mapGetters({ user: 'setUser', data: 'setUserId', skills: 'getSkill' })
  },
  methods: {
    ...mapActions(['getUserByIds', 'getSkill', 'postSkill', 'deleteSkill']),
    addSkill() {
      const data = [
        {
          user_id: this.user.user_id,
          skill_name: this.skill
        }
      ]
      this.postSkill(data)
      this.getSkill(this.user.user_id)
    },
    destroySkill(id) {
      const data = {
        user_id: this.user.user_id,
        skill_id: id
      }
      this.deleteSkill(data)
    },
    addFind: function() {
      this.finds.push({ value: '' })
    }
  }
}
</script>
<style scoped>
.pad {
  padding: 0px 30px !important;
}
.card {
  padding: 30px 0px;
  border-radius: 10px;
}
h6 {
  color: gray;
  margin-top: 20px;
  margin-left: 15px;
}
.flex-comp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-def {
  color: white;
  background-color: #fbb017;
  margin-left: 20px;
  border-radius: 5px;
  border: none;
  padding: 8px 20px;
}
.btn-bottom {
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  color: #fbb017;
  border: 2px solid #fbb017;
}
.month {
  border: 1px solid rgb(201, 199, 199);
  border-radius: 4px;
  width: 100%;
  padding: 5px 11px;
  color: gray;
}
</style>
