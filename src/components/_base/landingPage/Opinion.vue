<template>
  <div>
    <div class="main">
      <h2 class="text-center card-text-head mb-5">
        Their Opinion about kerjain
      </h2>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="350"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide img-blank background="red" img-alt="Blank image">
          <b-container>
            <b-row>
              <b-col col lg="4" sm="12" cols="12">
                <div class="card text-center">
                  <div class="img-cover rounded-circle">
                    <img
                      src="../../../assets/img_opinion_1.png"
                      class="rounded-circle img-opinion"
                    />
                  </div>
                  <h4 class="card-text-head mt-2">Harry Styles</h4>
                  <p class="card-text-job">Web Developer</p>
                  <p class="card-text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </b-col>
              <b-col col lg="4" sm="12" cols="12">
                <div class="card text-center">
                  <div class="img-cover rounded-circle">
                    <img
                      src="../../../assets/img_opinion_1.png"
                      class="rounded-circle img-opinion"
                    />
                  </div>
                  <h4 class="card-text-head mt-2">Harry Styles</h4>
                  <p class="card-text-job">Web Developer</p>
                  <p class="card-text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </b-col>
              <b-col col lg="4" sm="12" cols="12">
                <div class="card text-center">
                  <div class="img-cover rounded-circle">
                    <img
                      src="../../../assets/img_opinion_1.png"
                      class="rounded-circle img-opinion"
                    />
                  </div>
                  <h4 class="card-text-head mt-2">Harry Styles</h4>
                  <p class="card-text-job">Web Developer</p>
                  <p class="card-text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-carousel-slide>
        <b-carousel-slide img-blank background="purple" img-alt="Blank image">
          <b-container>
            <b-row>
              <b-col col lg="4" sm="12" cols="12">
                <div class="card text-center">
                  <div class="img-cover rounded-circle">
                    <img
                      src="../../../assets/img_opinion_1.png"
                      class="rounded-circle img-opinion"
                    />
                  </div>
                  <h4 class="card-text-head mt-2">Harry Styles</h4>
                  <p class="card-text-job">Web Developer</p>
                  <p class="card-text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </b-col>
              <b-col col lg="4" sm="12" cols="12">
                <div class="card text-center">
                  <div class="img-cover rounded-circle">
                    <img
                      src="../../../assets/img_opinion_1.png"
                      class="rounded-circle img-opinion"
                    />
                  </div>
                  <h4 class="card-text-head mt-2">Harry Styles</h4>
                  <p class="card-text-job">Web Developer</p>
                  <p class="card-text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </b-col>
              <b-col col lg="4" sm="12" cols="12">
                <div class="card text-center">
                  <div class="img-cover rounded-circle">
                    <img
                      src="../../../assets/img_opinion_1.png"
                      class="rounded-circle img-opinion"
                    />
                  </div>
                  <h4 class="card-text-head mt-2">Harry Styles</h4>
                  <p class="card-text-job">Web Developer</p>
                  <p class="card-text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 80px;
}

.card {
  padding: 20px;
  -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border: unset;
}
.card .img-cover img.rounded-circle.img-opinion {
  width: 90px;
  margin-top: 5%;
}

.img-cover {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 223, 39, 0.5);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.card-text-head {
  font-weight: 600;
  color: #1f2a36;
}
.card-text-job {
  color: #9ea0a5;
}
.card-text-desc {
  color: #46505c;
  font-size: 14px;
}

.carousel-control-prev-icon {
  height: 200px;
  width: 200px;
}

@media (max-width: 576px) {
  .main {
    margin-top: 480px;
  }
}
</style>
