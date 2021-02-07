<template>
  <div>
    <b-row class="p-0 border-top border-bottom">
      <b-col lg="2" sm="12" class="text-center p-0 m-0">
        <img src="../assets/user.png" width="200" class="rounded-circle m-0" />
      </b-col>
      <b-col lg="8" sm="12" class="py-4 px-0 content">
        <h3>
          <strong>{{ data.user_name }}</strong>
        </h3>
        <h6 class="text-secondary">{{ data.user_field }}</h6>
        <h6 class="text-secondary mb-3">
          <b-icon icon="geo-alt" class="mr-2"></b-icon>{{ data.user_location }}
        </h6>
        <div class="skill" v-for="(item, index) in cardSkills" :key="index">
          {{ item }}
        </div>
      </b-col>
      <b-col lg="2" sm="12" class="text-center p-0 m-0">
        <button class="button button-purple" @click="choose">
          Lihat Profil
        </button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      cardSkills: []
    }
  },
  created() {
    this.cardSkills = this.data.skills.split(',')
  },
  methods: {
    choose() {
      this.$router.push({ name: 'Profile', params: { data: this.data } })
    }
  }
}
</script>
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
