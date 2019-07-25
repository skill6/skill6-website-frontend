<template>
  <div class="home-main">
    <!-- 第一层: 推荐 -->
    <first-layer></first-layer>
    <!-- 第二层: 通知 -->
    <second-layer></second-layer>
    <!-- 第三层：轮播 -->
    <Divider />
    <third-layer></third-layer>
    <!-- 第四层：视频 -->
    <Divider />
    <fourth-layer></fourth-layer>
  </div>
</template>

<script>
import FirstLayer from './mainpart/FirstLayer'
import SecondLayer from './mainpart/SecondLayer'
import ThirdLayer from './mainpart/ThirdLayer'
import FourthLayer from './mainpart/FourthLayer'

export default {
  components: {
    FirstLayer,
    SecondLayer,
    ThirdLayer,
    FourthLayer
  }
}
</script>

<style scoped>
.home-main {
  width: 980px;
  margin: 0 auto;
}
</style>
