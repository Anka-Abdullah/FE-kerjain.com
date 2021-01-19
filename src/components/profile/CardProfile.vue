<template>
  <div>
    <b-card class="border-0">
      <img
        src="../../assets/user.png"
        width="200"
        class="rounded-circle text-center ml-1 mb-2"
      />
      <h4>
        <strong>{{ data.user_name }}</strong>
      </h4>
      <small class="text-secondary">{{ data.user_field }}</small
      ><br />
      <small class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>{{ data.user_location }}
      </small>
      <p class="text-secondary m-0 my-2">
        <small>{{ data.user_job_type }}</small>
      </p>
      <p>
        <small class="text-secondary" v-if="display == 1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          molestiae animi voluptatum nostrum labore doloribus magni? Quasi
          sapiente excepturi est deserunt nihil.</small
        >
      </p>
      <b-row>
        <button
          class="button button-purple w-75 mx-auto mb-4 mt-2"
          v-if="show == 1"
        >
          Hire
        </button>
      </b-row>
      <div v-if="display == 1">
        <h4 class="m-0 mb-1"><strong>Skill</strong></h4>
        <div class="skill" v-for="(item, index) in cardSkills" :key="index">
          {{ item }}
        </div>
      </div>

      <div v-if="show == 1">
        <h6 class="text-secondary mt-5">
          <b-icon icon="envelope" class="mr-2"></b-icon>{{ data.email }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="telephone" class="mr-2"></b-icon>{{ data.phone }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="instagram" class="mr-2"></b-icon>{{ data.instagram }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="github" class="mr-2"></b-icon>{{ data.github }}
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="linkedin" class="mr-2"></b-icon>{{ data.linkedin }}
        </h6>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
    show: Number,
    display: Number
  },
  data() {
    return {
      cardSkills: []
    }
  },
  created() {
    this.cardSkills = this.data.skills.split(',')
  }
}
</script>
