<template>
  <div
    class="editproile"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0">
      <b-row class="profile">
        <b-col sm="12" md="4" lg="4">
          <LeftProf />
        </b-col>
        <b-col sm="12" md="8" lg="8">
          <RightProf />
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import { alert } from '../mixins/alert'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import LeftProf from '../components/Profile Worker/LeftProfile'
import RightProf from '../components/Profile Worker/RightProfile'

export default {
  mixins: [alert],
  name: 'EditProfileUser',
  components: {
    Navbar,
    Footbar,
    LeftProf,
    RightProf
  }
}
</script>
