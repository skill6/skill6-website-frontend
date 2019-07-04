<template>
  <div class="info-flow-side-right">
    <div class="hot-label">
      <el-row class="hot-label-row">
        <el-button type="primary" size="mini">Java</el-button>
        <el-button type="primary" size="mini">全栈</el-button>
      </el-row>
      <el-row class="hot-label-row">
        <el-button type="primary" size="mini">VUE</el-button>
        <el-button type="primary" size="mini">人工智能</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRightSide'
}
</script>

<style scoped>
.info-flow-side-right {
  position: relative;
  display: block;
  width: 20%;
  background-color: whitesmoke;
  margin-right: 15px;
}

.hot-label {
  margin: 10px;
}

.hot-label-row {
  margin-bottom: 10px;
}
</style>
