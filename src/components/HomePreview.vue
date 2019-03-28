<template>
  <skill6-carousel></skill6-carousel>
</template>

<script>
import $ from 'jquery'
import Carousel from './home/Carousel'

export default {
  name: 'HomePreview',
  components: {
    'skill6-carousel': Carousel
  },
  mounted: function () {
    // 轮播立体效果
    $('#carousel').carousel({
      curDisplay: 1,
      autoPlay: false,
      interval: 1500
    })
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
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
}

.info-flow-side {
  position: relative;
  display: block;
  width: 15%;
  background-color: crimson;
}
</style>
