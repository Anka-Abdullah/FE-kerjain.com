<template>
  <div class="hire-page" style="background-color:#F7F7F7;">
    <Navbar :show="2" />
    <div class="hire">
      <b-container>
        <b-row class="row-hire">
          <b-col sm="4"><UserInformation /></b-col>
          <b-col sm="6"><FormHire /></b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footbar'
import UserInformation from '../components/Hire/UserInformation'
import FormHire from '../components/Hire/formHire'
import { mapActions } from 'vuex'
export default {
  name: 'Hire',
  components: {
    Navbar,
    Footer,
    UserInformation,
    FormHire
  },
  created() {
    this.getUserInformation(this.$route.params.id)
    this.getSkillById(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getUserInformation']),
    ...mapActions(['getSkillById'])
  }
}
</script>

<style scoped>
.hire {
  margin-bottom: 300px;
}
</style>
