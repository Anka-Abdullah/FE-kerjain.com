<template>
  <div>
    <b-container>
      <b-row class="row-1">
        <b-col col lg="6" sm="12" cols="12">
          <div class="head-text-left pr-4">
            <h1 class="head-title">
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </h1>
            <p class="head-p mt-3">
              temukan talent digital terbaik bersama kami, developer handal
              hingga designer keren semua ada disini.
            </p>
            <router-link :to="user.user_role == 1 ? '/home' : '/myprofile'">
              <button class="button button-purple mt-3">
                Mulai dari sekarang
              </button>
            </router-link>
          </div>
        </b-col>
        <b-col col lg="6" sm="12" cols="12">
          <img class="head-img" src="../../../assets/img_ldp_1.png" />
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col col lg="6" sm="12" cols="12" class="d-none d-sm-block">
          <img src="../../../assets/img_ldp_2.png" class="head-img"
        /></b-col>
        <b-col col lg="6" sm="12" cols="12">
          <h2 class="head-title">Kenapa harus mencari talent di kerjain</h2>
          <div class="item-list mt-4">
            <img src="../../../assets/icon_check_purple.png" />
            <span class="text ml-2"
              >Terhubung langsung dengan talent terbaik</span
            >
          </div>
          <div class="item-list mt-4">
            <img src="../../../assets/icon_check_purple.png" />
            <span class="text ml-2">Talent dengan skill standar industri</span>
          </div>
          <div class="item-list mt-4">
            <img src="../../../assets/icon_check_purple.png" />
            <span class="text ml-2">Proses hiring yang mudah</span>
          </div>
          <div class="item-list mt-4">
            <img src="../../../assets/icon_check_purple.png" />
            <span class="text ml-2">Tidak ada biaya (GRATIS)</span>
          </div>
        </b-col>
        <b-col col lg="6" sm="12" cols="12" class="d-block d-sm-none mt-5">
          <img src="../../../assets/img_ldp_2.png" class="head-img"
        /></b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col col lg="6" sm="12" cols="12">
          <div class="skill-talent">
            <h2 class="head-title">Skill Talent</h2>
            <p class="head-p">
              Talent kerjain selalu update dengan teknologi dan bahasa
              pemrograman terbaru sesuai kebutuhan industri
            </p>
            <div class="d-flex justify-content-start">
              <div class="left mr-5">
                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">Java</span>
                </div>

                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">Kotlin</span>
                </div>

                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">PHP</span>
                </div>

                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">JavaScript</span>
                </div>
              </div>
              <div class="left">
                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">Golang</span>
                </div>

                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">C++</span>
                </div>

                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">Ruby</span>
                </div>

                <div class="mt-4">
                  <img src="../../../assets/icon_check_orange.png" />
                  <span class="text ml-2">10+ Bahasa lainnya</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col col lg="6" sm="12" cols="12">
          <img src="../../../assets/img_ldp_3.png" class="head-img" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ user: 'setUser' })
  }
}
</script>

<style scoped>
.row-1 {
  margin-top: 20vh;
}

.head-title {
  color: #1f2a36;
  font-weight: 600;
  line-height: 70px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}

.head-p {
  color: #1f2a36;
  font-weight: 400;
  line-height: 28px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}

.head-img {
  width: 500px;
}

.head-text-left {
  margin-top: 80px;
}

.button {
  margin: 0;
}

.button-purple {
  padding: 15px;
  font-weight: 700;
}

.button-purple:hover {
  transition-duration: 0.5s;
}

.text {
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #46505c;
}

.skill-talent {
  margin-left: 100px;
}

@media (max-width: 992px) {
  .row-1 {
    margin-top: 10vh;
  }
}

@media (max-width: 576px) {
  .row-1 {
    margin-top: 5vh;
  }

  .head-img {
    width: 330px;
  }

  .skill-talent {
    margin-left: 0px;
  }

  .head-img {
    margin-top: 20px;
  }
}
</style>
