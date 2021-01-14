<template>
  <div>
    <Navbar />
    <b-container>
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Opinion />
        </b-col>
      </b-row>
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
