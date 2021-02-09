<template>
  <div class="confirmationEmail">
    <b-container>
      <b-row>
        <b-col class="confirm">
          Click This Button For Verivate Your Email
          <br />
          <b-button @click="verifyEmail()" class="verivication-button"
            >Verify Email</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { alert } from '../mixins/alert'
import { mapActions } from 'vuex'
export default {
  name: 'ConfirmationEmail',
  mixins: [alert],
  created() {
    console.log(this.$route.params.id)
  },
  methods: {
    ...mapActions(['verificationEmail']),
    verifyEmail() {
      this.verificationEmail(this.$route.params.id)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/loginuser')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.confirmationEmail {
  font-family: Rubik;
}
.confirm {
  margin-top: 10%;
  text-align: center;
}
.verivication-button {
  margin-top: 50px;
  width: 20%;
  height: 40px;
  border-radius: 20px;
}
</style>
