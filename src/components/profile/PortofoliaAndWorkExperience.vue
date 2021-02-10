<template>
  <div>
    <b-card class="border-0 bg-white shadow">
      <label class="select" @click="portofolio"
        >Portofolio
        <input type="radio" name="radio" hidden />
        <span :class="show === 'portofolio' ? 'checkmark' : ''"></span>
      </label>
      <label class="select" @click="experience"
        >Pengalaman Kerja
        <input type="radio" name="radio" hidden />
        <span :class="show === 'experience' ? 'checkmark' : ''"></span>
      </label>
      <b-row v-if="show === 'portofolio'">
        <b-col
          v-for="(item, index) in porto"
          :key="index"
          lg="4"
          sm="12"
          class="text-center py-3"
        >
          <a :href="item.porto_link" target="_blank">
            <div class="porto-card">
              <img
                class="porto-img"
                v-if="item.porto_image"
                :src="url + 'porto/' + item.porto_image"
              />
              <img
                v-else
                class="porto-img"
                src="../../assets/Rectangle 637.png"
              />
              <h6 class="mt-2">
                <strong>{{ item.porto_name }}</strong>
              </h6>
            </div>
          </a>
        </b-col>
      </b-row>
      <div v-if="show === 'experience'">
        <b-row
          v-for="(item, index) in exp"
          :key="index"
          class="mt-4 border-bottom"
        >
          <b-col lg="2" sm="12" class="text-center">
            <img src="../../assets/Rectangle 672.png" alt="" />
          </b-col>
          <b-col lg="10" sm="12">
            <h6 class="m-0">
              <strong>{{ item.exp_position }}</strong>
            </h6>
            <h6 class="m-0">{{ item.exp_company }}</h6>
            <small class="text-secondary"
              >{{ formatDate(item.exp_start) }} -
            </small>
            <small class="text-secondary">{{ formatDate(item.exp_end) }}</small>
            <p>
              <small>
                {{ item.exp_desc }}
              </small>
            </p>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  props: {
    data: Object
  },
  data() {
    return {
      show: 'portofolio',
      url: process.env.VUE_APP_URL,
      portoIndex: 'a'
    }
  },
  computed: {
    ...mapGetters({ porto: 'getDataPortofolio', exp: 'getDataExperience' }),
    paramsId() {
      if (this.$route.params.id) {
        return this.$route.params.id
      } else {
        return this.data.user_id
      }
    }
  },
  created() {
    this.getPortoData()
    this.getExpData()
  },
  methods: {
    ...mapActions(['getExp', 'getPorto']),
    getPortoData() {
      this.getPorto(this.paramsId)
    },
    getExpData() {
      this.getExp(this.paramsId)
    },
    portofolio() {
      this.show = 'portofolio'
    },
    experience() {
      this.show = 'experience'
    },
    formatDate(time) {
      return moment(String(time)).format('MMM YYYY')
    },
    showPorto(index) {
      console.log('clicked')
      const indexNow = this.portoIndex
      if (indexNow != index) {
        this.portoIndex = index
      } else {
        this.portoIndex = 'a'
      }
      console.log(this.portoIndex)
    }
  }
}
</script>
<style scooped>
.select {
  padding: 0 10px;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin: 0 10px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #818181;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.checkmark {
  text-align: center;
  position: absolute;
  top: 27px;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #5e50a1;
}

.porto-img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 10px;
  border-radius: 10px;
}

.porto-card {
  cursor: pointer;
}

.porto-text {
  margin-top: -190px;
}

a:link {
  text-decoration: none;
  color: black;
}

a:visited {
  color: black;
}
</style>
