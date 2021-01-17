<template>
  <div>
    <b-container class="login">
      <TopSide />
      <LeftSide />
      <div class="content-right">
        <div class="righted">
          <button class="btn-top" @click.prevent="toPage()">Pekerja</button>
        </div>
        <h4>Halo, Pewpeople</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
          corrupti sunt fugit, eius odio!
        </p>
        <br />
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Nama" label-for="Name">
            <b-form-input
              id="Name"
              v-model="form.user_name"
              type="text"
              placeholder="Masukkan nama"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="Email">
            <b-form-input
              id="Email"
              v-model="form.user_email"
              type="email"
              placeholder="Masukkan alamat email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Perusahaan" label-for="perusahaan">
            <b-form-input
              id="perusahaan"
              v-model="form.user_name"
              type="text"
              placeholder="Masukkan nama perusahaan       "
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Jabatan" label-for="jabatan">
            <b-form-input
              id="jabatan"
              v-model="form.user_name"
              type="text"
              placeholder="Posisi di perusahaan Anda"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="No Handphone" label-for="Phone Number">
            <b-form-input
              id="Phone Number"
              v-model="form.user_phone"
              type="number"
              placeholder="Masukkan nomor handphone"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Kata sandi" label-for="password">
            <b-form-input
              id="password"
              v-model="form.user_password"
              type="password"
              placeholder="Masukkan kata sandi"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Konfirmasi kata sandi"
            label-for="Confirm password"
          >
            <b-form-input
              id="Confirm password"
              v-model="form.confirm_pass"
              type="password"
              placeholder="Konfirmasi kata sandi"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <button class="yellow" type="submit">Daftar</button>
          <br />
          <div class="centered">
            Anda sudah punya akun?
            <router-link to="/loginrecruiter">Masuk disini</router-link>
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { alert } from '../../mixins/alert'
import { mapActions } from 'vuex'
import LeftSide from '../../components/auth/LeftSide'
import TopSide from '../../components/auth/TopSide'

export default {
  mixins: [alert],
  components: { LeftSide, TopSide },
  data() {
    return {
      form: {
        user_email: '',
        user_password: '',
        user_name: '',
        // user_phone: '',
        confirm_pass: '',
        user_job_type: ''
      }
    }
  },
  methods: {
    ...mapActions(['registerRecruiter']),
    toPage() {
      this.$router.push('registeruser')
    },
    onSubmit() {
      if (this.form.user_password !== this.form.confirm_pass) {
        return alert('password harus sama')
      } else {
        this.registerRecruiter(this.form)
          .then(result => {
            this.successAlert(result.data.msg)
            this.$router.push('loginrecruiter')
          })
          .catch(err => {
            this.errorAlert(err.data.msg)
          })
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
.login {
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  font-family: 'Open Sans', sans-serif !important;
}
.content-left {
  padding: 40px;
  flex: 1;
  width: 100%;
  height: 650px;
  background-image: url('../../assets/user-bg1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.content-right {
  padding: 40px;
  padding-top: 20px;
  flex: 1.2;
  font-family: 'Open Sans', sans-serif !important;
}
button {
  width: 100%;
  color: white;
  background-color: #fbb017;
  padding: 8px;
  border-radius: 5px;
  border: none;
}
.btn-top {
  color: white !important;
  background-color: #554b8e;
  width: 100px;
  margin-bottom: 25px;
}
.centered {
  padding: 25px;
  text-align: center;
}
.righted {
  text-align: right;
}
h4 {
  font-weight: bold;
}
@media (max-width: 800px) {
  .login {
    display: inline;
  }
}
</style>
