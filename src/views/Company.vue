<template>
  <div
    class="company"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0" class="text-center">
      <img
        src="../assets/user.png"
        width="200"
        class="rounded-circle text-center ml-1 mb-2"
      />
      <h3><strong>PT. Martabak Jaya Abadi</strong></h3>
      <h6 class="text-secondary">Financial</h6>
      <h6 class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>Lorem Ipsum
      </h6>
      <b-col class="w-50 mx-auto mt-3">
        <h6 class="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque optio
          provident debitis atque, repellat laboriosam vero sint vel illo nemo
          autem, exercitationem odit id. Voluptatem.
        </h6>
        <button class="button button-purple w-75 mt-4">Edit Profile</button>
        <h6 class="text-secondary mt-5">
          <b-icon icon="envelope" class="mr-2"></b-icon>gmail@gmail.com
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="instagram" class="mr-2"></b-icon>gmail@gmail.com
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="telephone" class="mr-2"></b-icon>gmail@gmail.com
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="linkedin" class="mr-2"></b-icon>gmail@gmail.com
        </h6>
      </b-col>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'Company',
  components: {
    Navbar,
    Footbar
  }
}
</script>
<style scooped></style>
