<template>
  <div class="info-main">
    <home-left-side></home-left-side>
    <home-main></home-main>
    <home-right-side></home-right-side>
  </div>
</template>

<script>
import HomeLeftSide from './home/HomeLeftSide'
import HomeRightSide from './home/HomeRightSide'
import HomeMain from './home/HomeMain'

export default {
  name: 'HomePage',
  components: {
    HomeLeftSide,
    HomeRightSide,
    HomeMain
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
