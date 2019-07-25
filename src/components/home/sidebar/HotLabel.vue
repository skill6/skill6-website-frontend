<template>
  <div>
    <Card>
      <p slot="title">
        <i class="el-icon-document"></i> 热门标签
      </p>
      <div>
        <el-row class="hot-label-row">
          <el-tag size="small">Java</el-tag>
          <el-tag type="success" size="small">全栈</el-tag>
          <el-tag type="info" size="small">VUE</el-tag>
          <el-tag type="warning" size="small">深度学习</el-tag>
        </el-row>
        <el-row class="hot-label-row">
          <el-tag type="danger" size="small">VUE</el-tag>
          <el-tag size="small">人工智能</el-tag>
        </el-row>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.hot-label-row {
  margin-bottom: 10px;
}
</style>
