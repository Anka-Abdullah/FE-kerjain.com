<template>
  <div>
    <b-container class="login">
      <TopSide />
      <LeftSide />
      <div class="content-right">
        <div class="righted">
          <button class="btn-top" @click.prevent="toPage()">Perekrut</button>
        </div>
        <h4>Halo talent</h4>
        <p>
          Dapatkan kesempatan bekerja dengan perusahaan terbaik hanya bersama.
          kami
        </p>
        <br />
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.user_email"
              type="email"
              placeholder="Masukkan alamat email"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group
            id="input-group-2"
            label="Kata sandi"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.user_password"
              type="password"
              placeholder="Masukkan kata sandi"
              required
            ></b-form-input>
          </b-form-group>
          <div class="righted">
            <router-link to="/resetpassword">Lupa kata sandi?</router-link>
          </div>
          <br />
          <button class="yellow" type="submit">Masuk</button>
          <br />
          <div class="centered">
            Anda belum punya akun?
            <router-link to="/registeruser">Daftar disini</router-link>
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
        user_password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.loginUser(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.errorAlert(err.data.msg)
        })
    },
    toPage() {
      this.$router.push('loginrecruiter')
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
