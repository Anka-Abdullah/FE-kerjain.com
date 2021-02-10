<template>
  <div>
    <div class="main">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h2 class="text-head">
            Temukan talent digital terbaik <br />
            bersama kami
          </h2>
        </div>
        <div>
          <button class="button button-white ">
            Mulai Dari Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 70px 70px;
  background-color: #5e50a1;
  border-radius: 20px 0 20px 0;
  margin: 100px 0;
  background-image: url('../../../assets/bg_float_card.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: bottom;
}

.text-head {
  color: white;
}

.button-white {
  padding: 15px;
  transition-duration: 0.5s;
}

@media (max-width: 576px) {
  .main {
    padding: 20px 20px;
    background-color: #5e50a1;
    border-radius: 20px 0 20px 0;
    margin: 50px 20px;
    background-image: url('../../../assets/bg_float_card.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: bottom;
  }

  .text-head {
    font-size: 18px;
  }

  .button-white {
    font-size: 14px;
  }
}
</style>
