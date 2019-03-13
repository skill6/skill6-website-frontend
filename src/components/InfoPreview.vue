<template>
  <div class="info-main">
    <info-left></info-left>
    <info-center></info-center>
    <info-right></info-right>
  </div>
</template>

<script>
import InfoLeft from './home/InfoLeft'
import InfoCenter from './home/InfoCenter'
import InfoRight from './home/InfoRight'

export default {
  name: 'InfoPreview',
  components: {
    InfoLeft,
    InfoCenter,
    InfoRight
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
  width: 25%;
  background-color: crimson;
  z-index: 0;
}
</style>
