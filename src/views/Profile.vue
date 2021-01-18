<template>
  <div
    class="profile"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0">
      <b-row>
        <b-col lg="3" sm="12"
          ><Card :display="1" :show="1" :data="data"
        /></b-col>
        <b-col lg="9" sm="12">
          <PortofoliaAndWorkExperience />
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Card from '../components/profile/CardProfile'
import PortofoliaAndWorkExperience from '../components/profile/PortofoliaAndWorkExperience'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'Profile',
  data() {
    return {
      data: [],
      cardSkills: []
    }
  },
  created() {
    this.data = this.$route.params.data
    console.log(this.data)
  },
  components: {
    Navbar,
    Footbar,
    Card,
    PortofoliaAndWorkExperience
  }
}
</script>
