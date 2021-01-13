<template>
  <div>
    <b-row class="p-0 border-top border-bottom">
      <b-col lg="2" sm="12" class="text-center p-0 m-0">
        <img src="../assets/user.png" width="200" class="rounded-circle m-0" />
      </b-col>
      <b-col lg="8" sm="12" class="py-4 px-0 content">
        <h3><strong>Nama Orang</strong></h3>
        <h6 class="text-secondary">Web Developer</h6>
        <h6 class="text-secondary mb-3">
          <b-icon icon="geo-alt" class="mr-2"></b-icon>Lorem Ipsum
        </h6>
        <div class="skill">lorem</div>
        <div class="skill">lorem</div>
        <div class="skill">lorem</div>
        <div class="skill">lorem</div>
      </b-col>
      <b-col lg="2" sm="12" class="text-center p-0 m-0">
        <button class="button button-purple">Lihat Profil</button>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
button {
  margin-top: 85px;
}
@media (max-width: 800px) {
  .content {
    text-align: center;
  }
  button {
    margin: -15px 0px 30px 0px;
  }
}
</style>
