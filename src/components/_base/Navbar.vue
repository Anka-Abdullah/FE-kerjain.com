<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top" class="b-navbar shadow">
      <b-container>
        <b-navbar-brand>
          <router-link to="/"
            ><h3 class="m-0">
              <b-icon icon="exclude" class="mr-2"></b-icon>Kerjain
            </h3></router-link
          >
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link v-if="!user.user_id" to="/loginuser"
              ><button class="button  button-white my-1" v-if="show === 1">
                Masuk
              </button></router-link
            >
            <router-link v-if="!user.user_id" to="/registeruser"
              ><button class="button button-purple my-1" v-if="show === 1">
                Daftar
              </button></router-link
            >
            <h5 class="m-0 mt-1 text-center" v-if="show === 2">
              <b-icon @click="showNotification" icon="bell"></b-icon>
              <div
                v-if="countNotif.total > 0"
                class="icon-count rounded-circle text-center position-absolute"
              >
                <p class="pt-1">{{ countNotif.total }}</p>
              </div>
              <div
                v-if="showNotif === 1"
                class="notif-wrapper position-absolute"
              >
                <div class="notif-card">
                  <div class="d-flex flex-row align-items-center">
                    <div class="mr-2">
                      <b-icon @click="showNotification" icon="bell"></b-icon>
                    </div>
                    <div>
                      <p>ini notif 1</p>
                    </div>
                  </div>
                </div>
                <div class="notif-card">
                  <div class="d-flex flex-row align-items-center">
                    <div class="mr-2">
                      <b-icon @click="showNotification" icon="bell"></b-icon>
                    </div>
                    <div>
                      <p>ini notif 1</p>
                    </div>
                  </div>
                </div>
                <div class="notif-card">
                  <div class="d-flex flex-row align-items-center">
                    <div class="mr-2">
                      <b-icon @click="showNotification" icon="bell"></b-icon>
                    </div>
                    <div>
                      <p>ini notif 1</p>
                    </div>
                  </div>
                </div>
              </div>
              <router-link to="/chat"
                ><b-icon icon="chat-left-dots" class="mx-4"></b-icon
              ></router-link>
              <!-- <router-link to="/editprofile"> </router-link> -->
              <b-dropdown right variant="none" class="ml-auto" no-caret
                ><template slot="button-content">
                  <b-avatar
                    v-if="userId.user_image"
                    :src="url + 'workers/' + userId.user_image"
                  >
                  </b-avatar>
                  <b-avatar v-else src="https://placekitten.com/300/300">
                  </b-avatar
                ></template>
                <b-dropdown-item @click="handleMyProfile"
                  >My Profile</b-dropdown-item
                >
                <b-dropdown-item
                  v-if="user.user_role === 1"
                  @click="handleRecruiter"
                  >Edit Profile</b-dropdown-item
                >
                <b-dropdown-item
                  v-if="user.user_role === 0"
                  @click="handleWorker"
                  >Profile</b-dropdown-item
                >
                <b-dropdown-item v-if="user.user_id" @click="handleLogout"
                  >Logout</b-dropdown-item
                >
              </b-dropdown>
            </h5>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL,
      showNotif: 0
    }
  },
  props: {
    show: Number
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      userId: 'setUserId',
      notif: 'getNotifById',
      countNotif: 'getCountNotif'
    })
  },
  methods: {
    ...mapActions([
      'logout',
      'getUserByIds',
      'getNotifById',
      'getCountNotif',
      'patchNotif'
    ]),
    handleLogout() {
      this.logout()
    },
    handleMyProfile() {
      if (this.user.user_role === 1) {
        this.$router.push('Company')
      } else {
        this.$router.push('MyProfile')
      }
    },
    handleWorker() {
      this.$router.push('EditProfileUser')
    },
    handleRecruiter() {
      this.$router.push('EditProfile')
    },
    getUserData() {
      this.getUserByIds(this.user.user_id)
    },
    showNotification() {
      this.showNotif === 0 ? (this.showNotif = 1) : (this.showNotif = 0)
      console.log(this.showNotif)
    },
    getNotification() {
      this.getNotifById(this.user.user_id)
    },
    getCountNotification() {
      this.getCountNotif(this.user.user_id)
    },
    patchNotification() {
      this.patchNotif(this.user.user_id)
    }
  },
  created() {
    this.getUserData()
    this.getNotification()
    this.getCountNotification()
  }
}
</script>
<style scoped>
.icon-count {
  background-color: red;
  width: 18px;
  height: 18px;
  margin-top: -20px;
  margin-left: 12px;
}

.icon-count p {
  font-size: 11px;
  color: #fff;
}

.notif-wrapper {
  background: rgba(238, 237, 237, 0.9);
  border-radius: 5px;
  padding: 10px;
}

.notif-card {
  border: 1px solid rgb(160, 0, 192);
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 10px;
}

.notif-card p {
  font-size: 13px;
  margin-bottom: unset;
}

.b-navbar {
  padding: 8px 60px;
  background-color: #ffffff !important;
}
a {
  color: black;
}
@media (max-width: 600px) {
  .b-navbar {
    padding: 8px 10px;
  }
}
</style>
