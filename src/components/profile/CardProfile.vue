<template>
  <div>
    <b-card class="border-0">
      <div class="img-wrapper text-center">
        <img
          v-if="user.user_image"
          :src="url + 'fileUploadsApiKerjain/workers/' + user.user_image"
          width="200"
          class="rounded-circle profile-img text-center ml-1 mb-2"
        />
        <img
          v-else
          src="../../assets/user.png"
          width="200"
          class="rounded-circle profile-img text-center ml-1 mb-2"
        />
      </div>
      <h4>
        <strong>{{ user.user_name }}</strong>
      </h4>
      <small class="text-secondary"
        ><strong>{{ user.user_jobdesc }}</strong></small
      ><br />
      <small class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>{{ user.user_location }}
      </small>
      <br />
      <small class="text-secondary">
        {{ user.user_job_type }}
      </small>
      <p>
        <small class="text-secondary" v-if="display == 1">{{
          user.user_description
        }}</small>
      </p>
      <b-row>
        <button
          v-if="paramsId == data.user_id"
          class="button button-purple w-75 mx-auto mb-4 mt-2"
          @click="editProfile"
        >
          Edit Profile
        </button>
        <button
          v-else
          class="button button-purple w-75 mx-auto mb-4 mt-2"
          @click="hire"
        >
          Hire
        </button>
      </b-row>
      <div v-if="display == 1">
        <h4 class="m-0 mb-1"><strong>Skill</strong></h4>
        <div class="skill" v-for="(item, index) in skill" :key="index">
          {{ item.skill_name }}
        </div>
      </div>

      <div v-if="show == 1">
        <h6 class="text-secondary mt-5">
          <b-icon icon="envelope" class="mr-2"></b-icon>{{ user.user_email }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="telephone" class="mr-2"></b-icon>{{ user.user_phone }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="instagram" class="mr-2"></b-icon
          >{{ user.user_instagram }}
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="github" class="mr-2"></b-icon>{{ user.user_github }}
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="linkedin" class="mr-2"></b-icon>{{ user.user_linkedin }}
        </h6>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    data: Object,
    show: Number,
    display: Number
  },
  data() {
    return {
      cardSkills: [],
      url: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({ user: 'setUserId', skill: 'getSkill' }),
    paramsId() {
      if (this.$route.params.id) {
        return this.$route.params.id
      } else {
        return this.data.user_id
      }
    }
  },
  created() {
    this.getUserData()
    this.getUserSkill()
  },
  methods: {
    ...mapActions(['getUserByIds', 'getSkill']),
    hire() {
      this.$router.push({ name: 'Hire', params: { id: this.paramsId } })
    },
    editProfile() {
      this.$router.push({ name: 'EditProfileUser' })
    },
    getUserData() {
      this.getUserByIds(this.paramsId)
    },
    getUserSkill() {
      this.getSkill(this.paramsId)
    }
  }
}
</script>

<style scoped>
.text-secondary {
  font-size: 14px !important;
}

.profile-img {
  width: 110px;
  height: 110px;
}

.img-wrapper {
  width: 100%;
}
</style>
