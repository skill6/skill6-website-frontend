<template>
  <div class="info-flow-side-right">
    <div class="hot-label">
      <el-row class="hot-label-row">
        <el-tag>Java</el-tag>
        <el-tag type="success">全栈</el-tag>
        <el-tag type="info">VUE</el-tag>
        <el-tag type="warning">深度学习</el-tag>
      </el-row>
      <el-row class="hot-label-row">
        <el-tag type="danger">VUE</el-tag>
        <el-tag>人工智能</el-tag>
      </el-row>
    </div>
    <div>
      <lunar-calendar></lunar-calendar>
    </div>
  </div>
</template>

<script>
import LunarCalendar from './sidebar/LunarCalendar'

export default {
  name: 'HomeRightSide',
  components: {
    LunarCalendar
  }
}
</script>

<style scoped>
.info-flow-side-right {
  position: relative;
  display: block;
  width: 24%;
  background-color: whitesmoke;
  margin-right: 15px;
}

.hot-label {
  margin: 10px;
  background-color: white;
  padding: 5px;
}

.hot-label-row {
  margin-bottom: 10px;
}
</style>
