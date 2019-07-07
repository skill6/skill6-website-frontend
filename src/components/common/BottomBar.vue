<template>
  <section class="bottom-container">
    <el-divider></el-divider>
    <el-row>
      <el-tooltip class="tooltip-item" effect="light" content="点赞" placement="top">
        <el-badge :value="200" :max="99">
          <Button shape="circle" icon="md-thumbs-up" size="small"></Button>
        </el-badge>
      </el-tooltip>
      <el-tooltip class="tooltip-item" effect="light" content="反对" placement="top">
        <el-badge :value="200" :max="99">
          <Button shape="circle" icon="md-thumbs-down" size="small"></Button>
        </el-badge>
      </el-tooltip>
      <el-tooltip class="tooltip-item" effect="light" content="收藏" placement="top">
        <el-badge :value="200" :max="99">
          <el-button type="warning" icon="el-icon-star-off" size="mini" plain circle></el-button>
        </el-badge>
      </el-tooltip>
      <el-button-group class="page-btn-group">
        <el-button type="primary" icon="el-icon-arrow-left" size="mini" plain>上一页</el-button>
        <el-button type="primary" size="mini" plain>
          下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
    </el-row>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.bottom-container {
  padding: 0 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 50px;
}

.tooltip-item {
  padding: 5px;
  margin-right: 25px;
}

.page-btn-group {
  margin-right: 25px;
  float: right;
}
</style>
