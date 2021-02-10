<template>
  <div class="content-left">
    <h4 class="m-0"><b-icon icon="exclude" class="mr-2"></b-icon>Kerjain</h4>
    <h3>
      Temukan developer berbakat & terbaik di berbagai bidang keahlian
    </h3>
  </div>
</template>

<style scoped>
.content-left {
  color: white;
  padding: 40px;
  flex: 1;
  width: 100%;
  height: 650px;
  background-image: url('../../assets/user-bg1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
h4 {
  font-weight: bold;
}
h3 {
  padding-top: 120px;
  padding-right: 90px;
  letter-spacing: 0.03em;
  font-weight: 600;
  line-height: 2;
}

@media (max-width: 800px) {
  .content-left {
    display: none !important;
  }
}
</style>
