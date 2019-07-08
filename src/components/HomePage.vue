<template>
  <div class="info-main">
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
.info-main {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
}
</style>
