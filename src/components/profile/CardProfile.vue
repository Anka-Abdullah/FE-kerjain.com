<template>
  <div>
    <b-card class="border-0">
      <img
        src="../../assets/user.png"
        width="200"
        class="rounded-circle text-center ml-1 mb-2"
      />
      <h4><strong>Nama Orang</strong></h4>
      <small class="text-secondary">Web Developer</small><br />
      <small class="text-secondary">
        <b-icon icon="geo-alt" class="mr-2"></b-icon>Lorem Ipsum
      </small>
      <p class="text-secondary m-0 my-2"><small>Freelancer</small></p>
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
        <div class="skill">Lorem</div>
        <div class="skill">Lorem</div>
        <div class="skill">Loremipsum</div>
        <div class="skill">Lorem</div>
      </div>

      <div v-if="show == 1">
        <h6 class="text-secondary mt-5">
          <b-icon icon="envelope" class="mr-2"></b-icon>gmail@gmail.com
        </h6>
        <h6 class="text-secondary mt-4">
          <b-icon icon="instagram" class="mr-2"></b-icon>gmail@gmail.com
        </h6>
        <h6 class="text-secondary my-4">
          <b-icon icon="github" class="mr-2"></b-icon>gmail@gmail.com
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
  }
}
</script>
