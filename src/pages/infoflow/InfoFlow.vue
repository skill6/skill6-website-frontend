<template>
  <div class="info-flow-main">
    <info-main></info-main>
  </div>
</template>

<script>
import $ from 'jquery'

import InfoMain from '@/components/infoflow/InfoMain'

export default {
  name: 'InfoFlow',
  components: {
    InfoMain
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

<style scoped>
.info-flow-main {
  width: 60%;
  margin: auto 20%;
}
</style>
