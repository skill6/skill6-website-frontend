<template>
  <div class="video-main">
    <el-row :gutter="30">
      <el-col :span="8" v-for="(video, index) in videoList" :key="index">
        <single-video-preview v-bind:video="video"></single-video-preview>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Constant from '../../../api/constant'
import SingleVideoPreview from './SingleVideoPreview'

export default {
  components: {
    SingleVideoPreview
  },
  data () {
    return {
      videoList: []
    }
  },
  created () {
    this.$http.get(Constant.videosUrl).then((data) => {
      this.videoList = data.body.videoList
    })
    this.pageParam = {
      pageSize: 10,
      currentPage: 1,
      totalCount: 1000
    }
  }
}
</script>

<style scoped>
.video-main {
  margin: 0 10%;
}

.el-col {
  margin-bottom: 40px;
}
</style>
