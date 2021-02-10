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
        <h4>Reset password</h4>
        <p>
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <br />
        <b-form>
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.user_email"
              type="email"
              placeholder="Enter your email address"
              required
            ></b-form-input>
          </b-form-group>
          <br />

          <b-button class="btn" v-b-modal.modal-1
            >Send Password reset email</b-button
          >
          <br />
        </b-form>
      </div>
      <div>
        <b-modal id="modal-1" hide-header hide-footer>
          <div class="centered">
            <h4>Request to Reset Your Account Password</h4>
            <br />
            <img src="../../assets/gembok.png" alt="" />
            <br />
            <p class="my-4">
              The following is the button for you to reset the password
            </p>
            <button class="yellow" @click.prevent="onSubmit()">
              Change password
            </button>
          </div>
        </b-modal>
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
        user_email: ''
      }
    }
  },
  methods: {
    ...mapActions(['forgetPassUser']),
    onSubmit() {
      this.forgetPassUser(this.form)
        .then(result => {
          alert(result.data.msg + ', please check inbox in your inbox!')
        })
        .catch(err => {
          alert(err.data.msg)
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
.btn {
  width: 100%;
  color: white;
  background-color: #fbb017;
  padding: 8px;
  border-radius: 5px;
  border: none;
}
.yellow {
  /* width: 300px !important; */
  color: white;
  background-color: #fbb017;
  padding: 8px 20px;
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
