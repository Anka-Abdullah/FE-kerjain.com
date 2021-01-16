<template>
  <div class="user-information">
    <div class="image">
      <img class="user-image" src="../../assets/user_image.png" alt="" />
    </div>
    <p class="user-name">User Name</p>
    <p class="user-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
      blanditiis
    </p>
    <div class="address" style="position:relative">
      <img class="map" src="../../assets/map-vector.png" alt="" />
      <span class="user-address">Purwokerto Jawa Tengah</span>
    </div>
    <p class="user-about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae odio
      nisi necessitatibus aspernatur deleniti iste
    </p>
    <div class="skill-div">
      <p class="skill-title">Skill</p>
      <div class="skill">
        Laravel
      </div>
      <div class="skill">
        React
      </div>
      <div class="skill">
        Css
      </div>
      <div class="skill">
        Python
      </div>
      <div class="skill">
        Express
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInformation'
}
</script>

<style scoped>
.user-information {
  margin-top: 150px;
  background-color: white;
  padding-bottom: 30px;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  font-family: 'Open Sans';
}
.image {
  text-align: center;
}
.user-image {
  margin-top: 30px;
  width: 150px;
  height: 150px;
  border-radius: 150px;
}
.user-name {
  text-align: left;
  margin-top: 13px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 22px;
}
.user-description {
  text-align: left;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  margin-top: -10px;
}
.map {
  text-align: left;
}
.user-address {
  position: absolute;
  top: 4px;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px;
}
.user-about {
  font-size: 14px;
  color: #9ea0a5;
  margin-top: 15px;
}
.skill-title {
  font-size: 22px;
  font-weight: 600;
  margin-top: 30px;
}
</style>
