<template>
  <div>
    <b-navbar class="b-navbar shadow">
      <b-container>
        <b-col>
          <h3 class="mb-3">
            <b-icon icon="exclude" class="mr-2"></b-icon>Kerjain
          </h3>
          <p>
            Kerjain adalah platform yang menemukan talenta digital terbaik
            <br />
            dengan perusahaan yang membutuhkan. cari dan temukan<br />
            pekerjaan impianmu bersama kami.
          </p>
          <hr class="mb-3" />
          <b-row>
            <b-col lg="5" sm="12">
              <p class="m-0">2020 Kerjain. All right reserved</p>
            </b-col>
            <b-col lg="4" sm="12">
              <button class="button button-purple m-0">
                Telephone : +62 888 8888 8888
              </button>
            </b-col>
            <b-col lg="3" sm="12">
              <button class="button button-purple m-0">
                Email : admin@kerjain.com
              </button>
            </b-col>
          </b-row>
        </b-col>
      </b-container>
    </b-navbar>
  </div>
</template>
<style scoped>
.b-navbar {
  padding: 50px 60px;
  background-color: #5e50a1 !important;
  color: #ffffff;
}
p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr {
  border: 1px solid #ffffff;
}
@media (max-width: 600px) {
  .b-navbar {
    padding: 16px 10px;
  }
  p {
    margin-left: 12px !important;
  }
}
</style>
