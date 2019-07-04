<template>
  <div class="info-flow-side-right">
    <div class="hot-label">
      <el-row class="hot-label-row">
        <el-button type="primary" size="mini">Java</el-button>
        <el-button type="primary" size="mini">全栈</el-button>
        <el-button type="primary" size="mini">VUE</el-button>
        <el-button type="primary" size="mini">深度学习</el-button>
      </el-row>
      <el-row class="hot-label-row">
        <el-button type="primary" size="mini">VUE</el-button>
        <el-button type="primary" size="mini">人工智能</el-button>
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
