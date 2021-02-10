<template>
  <div>
    <b-container class="login">
      <div class="content-left">
        <h4 class="m-0">
          <b-icon icon="exclude" class="mr-2"></b-icon>Kerjain
        </h4>
        <h3>
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h3>
      </div>
      <div class="content-right">
        <h4>Atur ulang kata sandi</h4>
        <p>
          You need to change your password to activate your account
        </p>
        <br />
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Kata sandi baru" label-for="password">
            <b-form-input
              id="password"
              v-model="form.newPassword"
              type="password"
              placeholder="Masukkan kata sandi baru"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Konfirmasi kata sandi baru"
            label-for="Confirm password"
          >
            <b-form-input
              id="Confirm password"
              v-model="form.confirmPassword"
              type="password"
              placeholder="Konfirmasi kata sandi baru"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <button class="yellow" type="submit">Reset password</button>
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
import { mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  components: {},
  data() {
    return {
      form: {
        key: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  created() {
    this.form.key = this.$route.params.key
  },
  methods: {
    ...mapActions(['confirmPassUser']),
    onSubmit() {
      this.confirmPassUser(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/loginuser')
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
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
  padding-top: 60px;
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
h3 {
  padding-top: 120px;
  padding-right: 90px;
  letter-spacing: 0.03em;
  color: white;
  font-weight: 600;
  line-height: 2;
}
.mr-2 {
  color: white;
}
.m-0 {
  color: white;
}
</style>
