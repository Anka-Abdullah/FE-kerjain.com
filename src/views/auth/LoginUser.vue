<template>
  <div>
    <b-container class="login">
      <div class="content-top centered">
        <h4><b-icon icon="exclude"></b-icon>Kerjain</h4>
        <br />
        <h5>
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h5>
      </div>
      <div class="content-left">
        <h4 class="m-0">
          <b-icon icon="exclude" class="mr-2"></b-icon>Kerjain
        </h4>
        <h3>
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h3>
      </div>
      <div class="content-right">
        <h4>Halo, Pewpeople</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
          corrupti sunt fugit, eius odio!
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
          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.user_password"
              type="password"
              placeholder="Masukkan kata sandi"
              required
            ></b-form-input>
          </b-form-group>
          <div class="righted">
            <router-link to="/confirmpassword">Lupa kata sandi?</router-link>
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
import { mapActions } from 'vuex'

export default {
  components: {},
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
          console.log(result)
          alert('success login')
          // this.successToast(result.data.msg)
          this.$router.push('/')
        })
        .catch(err => {
          //   this.dangerToast(err.data.msg)
          alert(err.data.msg)
        })
    },
    toPageRegisterUser() {
      this.$router.push('signUp')
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
.content-top {
  padding: 40px;
  background-image: url('../../assets/user-bg1.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

@media (max-width: 800px) {
  .content-left {
    display: none !important;
  }
  .login {
    display: inline;
  }
}

@media (min-width: 800px) {
  .content-top {
    display: none !important;
  }
}
</style>
