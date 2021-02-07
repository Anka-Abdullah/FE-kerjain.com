<template>
  <div>
    <b-card class="border-0 bg-white shadow">
      <label class="select" @click="portofolio"
        >Portofolio
        <input type="radio" name="radio" hidden />
        <span class="checkmark"></span>
      </label>
      <label class="select" @click="experience"
        >Pengalaman Kerja
        <input type="radio" name="radio" hidden />
        <span class="checkmark"></span>
      </label>
      <b-row v-if="show === 'portofolio'">
        <b-col lg="4" sm="12" class="text-center p-3">
          <img src="../../assets/Rectangle 637.png" alt="" />
          <h6 class="mt-2"><strong>Remainder App</strong></h6>
        </b-col>
        <b-col lg="4" sm="12" class="text-center p-3">
          <img src="../../assets/Rectangle 637.png" alt="" />
          <h6 class="mt-2"><strong>Remainder App</strong></h6>
        </b-col>
        <b-col lg="4" sm="12" class="text-center p-3">
          <img src="../../assets/Rectangle 637.png" alt="" />
          <h6 class="mt-2"><strong>Remainder App</strong></h6>
        </b-col>
        <b-col lg="4" sm="12" class="text-center p-3">
          <img src="../../assets/Rectangle 637.png" alt="" />
          <h6 class="mt-2"><strong>Remainder App</strong></h6>
        </b-col>
        <b-col lg="4" sm="12" class="text-center p-3">
          <img src="../../assets/Rectangle 637.png" alt="" />
          <h6 class="mt-2"><strong>Remainder App</strong></h6>
        </b-col>
      </b-row>
      <div v-if="show === 'experience'">
        <b-row class="mt-4 border-bottom">
          <b-col lg="2" sm="12" class="text-center">
            <img src="../../assets/Rectangle 672.png" alt="" />
          </b-col>
          <b-col lg="10" sm="12">
            <h6 class="m-0"><strong>Web Developer</strong></h6>
            <h6 class="m-0">Tokopedia</h6>
            <small class="text-secondary"
              >July 2019 - January 2020, 6 months</small
            >
            <p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </small>
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4 border-bottom">
          <b-col lg="2" sm="12" class="text-center">
            <img src="../../assets/Rectangle 672.png" alt="" />
          </b-col>
          <b-col lg="10" sm="12">
            <h6 class="m-0"><strong>Web Developer</strong></h6>
            <h6 class="m-0">Tokopedia</h6>
            <small class="text-secondary"
              >July 2019 - January 2020, 6 months</small
            >
            <p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </small>
            </p>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      show: 'portofolio'
    }
  },
  methods: {
    portofolio() {
      this.show = 'portofolio'
    },
    experience() {
      this.show = 'experience'
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
}

.checkmark {
  text-align: center;
  position: absolute;
  top: 27px;
  left: 0;
  height: 3px;
  width: 100%;
}

.select:hover input ~ .checkmark {
  background-color: #5e50a1;
}
.select input:checked ~ .checkmark {
  background-color: #5e50a1;
}
</style>
