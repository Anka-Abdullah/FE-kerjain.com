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
      <div class="border-bottom pl-4 mb-2">
        <h4><strong>Pengalaman Kerja</strong></h4>
      </div>
      <b-container class="pad">
        <h6>Posisi</h6>
        <b-form-input
          type="text"
          v-model="form.exp_position"
          placeholder="Masukkan posisi"
          required
        ></b-form-input>
        <h6>Nama perusahaan</h6>
        <b-form-input
          type="text"
          v-model="form.exp_company"
          placeholder="Masukkan nama perusahaan"
          required
        ></b-form-input>
        <div class="flex-comp">
          <div class="w-50 pr-2">
            <h6>Bulan - tahun mulai</h6>
            <input
              v-model="form.exp_start"
              class="month"
              type="datetime-local"
            />
          </div>
          <div class="w-50 pl-2">
            <h6>Bulan - tahun selesai</h6>
            <input v-model="form.exp_end" class="month" type="datetime-local" />
          </div>
        </div>
        <h6>Deskripsi singkat</h6>
        <b-form-textarea
          v-model="form.exp_desc"
          rows="3"
          max-rows="6"
          placeholder="Deskripsikan pekerjaan anda"
          required
        ></b-form-textarea>
        <hr class="my-4" />
        <button @click="postExp()" class="btn-bottom">
          <strong>Tambah Pengalaman Kerja</strong>
        </button>
      </b-container>
    </div>
    <br />
    <div class="card">
      <div class="border-bottom pl-4 mb-3">
        <h4><strong>List Pengalaman Kerja</strong></h4>
      </div>
      <b-container v-for="(item, index) in exps" :key="index" class="pad">
        <div>
          <strong>{{ item.exp_position }}</strong>
        </div>
        <div class="text-secondary">{{ item.exp_company }}</div>
        <small class="text-secondary"
          >{{ formatDate(item.exp_start) }} -
        </small>
        <small class="text-secondary">{{ formatDate(item.exp_end) }}</small>
        <p>{{ item.exp_desc }}</p>

        <div style="text-align: right;">
          <b-button v-b-modal="modalId2(index)" class="py-1" variant="danger">
            Hapus
          </b-button>
        </div>
        <b-modal :id="'modal1' + index" hide-footer>
          <template #modal-title> Hapus pengalaman kerja? </template>
          <div class="text-center">
            <b-button class="mt-3 mr-5" @click="$bvModal.hide('bv-modal')"
              >Batal</b-button
            >
            <b-button class="mt-3" variant="danger" @click="delExp(item.exp_id)"
              >Hapus</b-button
            >
          </div>
        </b-modal>
        <hr />
      </b-container>
    </div>
    <br />
    <div class="card">
      <div class="border-bottom pl-4 mb-2">
        <h4><strong>Portofolio</strong></h4>
      </div>
      <b-container class="pad">
        <h6>Nama aplikasi</h6>
        <b-form-input
          type="text"
          v-model="form2.porto_name"
          placeholder="Masukkan nama aplikasi"
          required
        ></b-form-input>
        <h6>Link repository</h6>
        <b-form-input
          type="text"
          v-model="form2.porto_link"
          placeholder="Masukkan link repository"
          required
        ></b-form-input>
        <h6>Type portofolio</h6>
        <b-form-radio-group class="ml-3" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="form2.porto_type"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="mobile"
            >Aplikasi mobile</b-form-radio
          >
          <b-form-radio
            v-model="form2.porto_type"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="web"
            >Aplikasi web</b-form-radio
          >
        </b-form-radio-group>
        <h6>Upload gambar</h6>
        <b-form-file
          v-model="form2.porto_image"
          class="mt-3"
          plain
          required
        ></b-form-file>
        <hr class="my-4" />
        <button @click="postPorto()" class="btn-bottom">
          <strong>Tambah Portofolio</strong>
        </button>
      </b-container>
    </div>
    <br />
    <div class="card">
      <div class="border-bottom pl-4 mb-3">
        <h4><strong>List Portofolio</strong></h4>
      </div>
      <b-container
        v-for="(item, index) in portos"
        :key="index"
        class="pad border-bottom flex-comp"
      >
        <div>
          <strong>{{ item.porto_name }}</strong>
        </div>
        <b-button v-b-modal="modalId(index)" class="py-1" variant="danger">
          Hapus
        </b-button>
        <b-modal :id="'modal' + index" hide-footer>
          <template #modal-title> Hapus portofolio? </template>
          <div class="text-center">
            <b-button class="mt-3 mr-5" @click="$bvModal.hide('bv-modal')"
              >Batal</b-button
            >
            <b-button
              class="mt-3"
              variant="danger"
              @click="delPorto(item.porto_id)"
              >Hapus</b-button
            >
          </div>
        </b-modal>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
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
      form: {
        user_id: '',
        exp_position: '',
        exp_company: '',
        exp_desc: '',
        exp_start: '',
        exp_end: ''
      },
      form2: {
        user_id: '',
        porto_name: '',
        porto_link: '',
        porto_type: '',
        porto_image: null
      }
    }
  },
  created() {
    this.getUserByIds(this.user.user_id)
    this.getSkill(this.user.user_id)
    this.getExps(this.user.user_id)
    this.getPortos(this.user.user_id)
  },
  mounted() {},
  computed: {
    ...mapGetters({
      user: 'setUser',
      data: 'setUserId',
      skills: 'getSkill',
      exps: 'getExp',
      portos: 'getPorto'
    })
  },
  methods: {
    ...mapActions([
      'getUserByIds',
      'getSkill',
      'postSkill',
      'deleteSkill',
      'getExps',
      'postExps',
      'delExps',
      'postPortos',
      'getPortos',
      'delPortos'
    ]),
    modalId(index) {
      return 'modal' + index
    },
    modalId2(index) {
      return 'modal1' + index
    },
    postPorto() {
      this.form2.user_id = this.user.user_id
      const {
        user_id,
        porto_name,
        porto_link,
        porto_type,
        porto_image
      } = this.form2
      const data = new FormData()
      data.append('user_id', user_id)
      data.append('porto_name', porto_name)
      data.append('porto_link', porto_link)
      data.append('porto_type', porto_type)
      data.append('porto_image', porto_image)
      this.postPortos(data)
        .then(result => {
          this.successAlert(result.data.msg)
          this.getPortos(this.user.user_id)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
    },
    delPorto(porto_id) {
      this.delPortos(porto_id)
      this.getPortos(this.user.user_id)
    },
    postExp() {
      this.form.user_id = this.user.user_id
      this.postExps(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
          this.getExps(this.user.user_id)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
    },
    delExp(exp_id) {
      this.delExps(exp_id)
      this.getExps(this.user.user_id)
    },
    formatDate(time) {
      return moment(String(time)).format('MMM YYYY')
    },
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
    }
  }
}
</script>
<style scoped>
.pad {
  padding: 10px 30px !important;
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
