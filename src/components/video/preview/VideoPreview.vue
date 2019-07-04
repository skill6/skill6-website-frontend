<template>
  <div class="video-main">
    <el-row v-for="index in 3" :key="index">
      <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
        <single-video-preview></single-video-preview>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SingleVideoPreview from './SingleVideoPreview'

export default {
  components: {
    SingleVideoPreview
  }
}
</script>

<style scoped>
.video-main {
  margin: 0 10%;
}

.el-row {
  margin-bottom: 30px;
}
</style>
