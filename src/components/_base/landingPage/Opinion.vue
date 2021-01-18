<template>
  <swiper class="swiper container" :options="swiperOption">
    <swiper-slide>
      <div class="card-opinion text-center">
        <div class="img-cover rounded-circle">
          <img src="../../../assets/img_opinion_1.png" class="rounded-circle" />
        </div>
        <h5 class="head-text mt-3">Harry Styles</h5>
        <p class="job-text">Web Developer</p>
        <p class="desc-text">
          Saya mendapatkan pekerjaan terbaik dengan kerjain
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-opinion text-center">
        <div class="img-cover rounded-circle">
          <img src="../../../assets/img_opinion_3.png" class="rounded-circle" />
        </div>
        <h5 class="head-text mt-3">Marshal</h5>
        <p class="job-text">DevOps Engineer</p>
        <p class="desc-text">
          Kerjain menghubungakn talent terbaik dengan perusahaan kelas dunia
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-opinion text-center">
        <div class="img-cover rounded-circle">
          <img src="../../../assets/img_opinion_2.png" class="rounded-circle" />
        </div>
        <h5 class="head-text mt-3">Freed Louis</h5>
        <p class="job-text">Project Manager</p>
        <p class="desc-text">
          Saya menemukan talent terbaik dari kerjain
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-opinion text-center">
        <div class="img-cover rounded-circle">
          <img src="../../../assets/img_opinion_3.png" class="rounded-circle" />
        </div>
        <h5 class="head-text mt-3">Louis Tomlinson</h5>
        <p class="job-text">UI/UX Designer</p>
        <p class="desc-text">
          Mudah, gratis dan sangat membantu
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-opinion text-center">
        <div class="img-cover rounded-circle">
          <img src="../../../assets/img_opinion_1.png" class="rounded-circle" />
        </div>
        <h5 class="head-text mt-3">Leonardo D</h5>
        <p class="job-text">Fullstack Developer</p>
        <p class="desc-text">
          Kerjain membantu saya mendapatkan pekerjaan impian
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-opinion text-center">
        <div class="img-cover rounded-circle">
          <img src="../../../assets/img_opinion_2.png" class="rounded-circle" />
        </div>
        <h5 class="head-text mt-3">Niall Horan</h5>
        <p class="job-text">Front End Developer</p>
        <p class="desc-text">
          Proses hiring sangat cepat
        </p>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '../../../../node_modules/swiper/swiper.min.css'
export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  padding: 40px 0 150px 0;
  padding-left: 5%;
  background-color: #e5e5e5;
}

.card-opinion {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  height: 380px;
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);
}

.img-cover {
  background-color: rgba(255, 245, 98, 0.5);
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.img-cover img {
  width: 110px;
  width: 110px;
  margin-top: 4.5%;
}

.head-text {
  color: #1f2a36;
  font-weight: 600;
}

.job-text {
  color: #9ea0a5;
}

.desc-text {
  color: #46505c;
}

@media (max-width: 992px) {
  .swiper {
    padding-left: unset;
  }

  .card-opinion {
    padding: 20px;
    width: 220px;
    height: 380px;
  }
}
@media (max-width: 768px) {
  .card-opinion {
    padding: 20px;
    width: 170px;
    height: 400px;
  }
}
@media (max-width: 576px) {
  .card-opinion {
    padding: 20px;
    width: 170px;
    height: 400px;
  }
}
@media (max-width: 488px) {
  .card-opinion {
    padding: 20px;
    width: 120px;
    height: 300px;
  }

  .img-cover {
    width: 90px;
    height: 90px;
  }

  .img-cover img {
    width: 80px;
    width: 80px;
  }

  .head-text {
    font-size: 14px;
  }

  .job-text {
    font-size: 11px;
  }

  .desc-text {
    font-size: 11px;
  }
}
</style>
