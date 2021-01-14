<template>
  <div>
    <Navbar :show="1" />
    <b-container>
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="grey-bg mt-5">
            <div class="text-center opinion-headline">
              <h3>Their opinion about kerjain</h3>
            </div>
            <Opinion />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <FloatCard />
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Header from '../components/_base/landingPage/Header'
import Opinion from '../components/_base/landingPage/Opinion'
import FloatCard from '../components/_base/landingPage/FloatCard'

export default {
  components: {
    Navbar,
    Footbar,
    Header,
    Opinion,
    FloatCard
  }
}
</script>

<style scoped>
.grey-bg {
  background-color: #e5e5e5;
}

.col {
  padding-left: unset;
  padding-right: unset;
}

.opinion-headline {
  padding-top: 100px;
  font-weight: 600;
  font-size: 36px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
