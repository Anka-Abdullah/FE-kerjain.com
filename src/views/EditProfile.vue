<template>
  <div
    class="editproile"
    style="background: linear-gradient(0deg, #e9e9e9 80%, #5e50a1 20%);"
  >
    <Navbar :show="2" />
    <b-container style="padding: 130px 0 100px 0">
      <b-row>
        <b-col lg="3" sm="12"
          ><Card />
          <b-row>
            <button class="button button-purple w-75 mx-auto my-4">
              Simpan
            </button></b-row
          ><b-row>
            <button class="button button-white w-75 mx-auto mb-4">
              Batal
            </button></b-row
          ></b-col
        >
        <b-col lg="9" sm="12">
          <b-card class="shadow bg-white pb-5">
            <b-row class="border-bottom pl-3">
              <h4><strong>Data Diri</strong></h4>
            </b-row>
            <b-container class="py-4">
              <form>
                <h6>Nama Perusahaan</h6>
                <input type="text" />
                <h6>Bidang</h6>
                <input type="text" />
                <h6>Kota</h6>
                <input type="text" />
                <h6>Deskripsi singkat</h6>
                <textarea class="w-100" rows="5"></textarea>
                <h6>Email</h6>
                <input type="text" />
                <h6>Instagram</h6>
                <input type="text" />
                <h6>Nomor telepon</h6>
                <input type="number" />
                <h6>Linkedin</h6>
                <input type="text" />
              </form>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Card from '../components/profile/CardProfile'
import Footbar from '../components/_base/Footbar'

export default {
  name: 'EditProfile',
  components: {
    Navbar,
    Footbar,
    Card
  }
}
</script>
<style scoped>
input {
  border: 1px solid #afafaf;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
}
form h6 {
  font-weight: 500;
  margin-top: 30px;
  color: #818181;
  size: 24px;
}
</style>
