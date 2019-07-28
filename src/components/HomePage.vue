<template>
  <div class="home-page">
    <home-main></home-main>
    <home-side></home-side>
  </div>
</template>

<script>
import HomeSide from './home/HomeSide'
import HomeMain from './home/HomeMain'

export default {
  components: {
    HomeMain,
    HomeSide
  }
}
</script>

<style>
.home-page {
  display: flex;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
</style>
