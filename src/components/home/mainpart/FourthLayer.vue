<template>
  <div class="home-video">
    <div>
      <h2>视频推荐</h2>
    </div>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="videoRecommend in videoRecommends"
        :key="videoRecommend.id"
        class="video-col"
      >
        <el-card>
          <a href="/">
            <el-image :src="videoRecommend.videoCoverUrl" fit="fill"></el-image>
          </a>
          <div class="video-bottom">
            <el-row class="video-text-row">《{{videoRecommend.title}}》</el-row>
            <el-row class="video-text-row">{{videoRecommend.videoDesc}}</el-row>
            <el-row class="video-text-row">
              <el-col :span="8" :offset="16">
                <router-link to="/video/123" class="view-video">观看视频</router-link>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import UrlConstant from '../../../api/constant'

export default {
  data () {
    return {
      videoRecommends: []
    }
  },
  created () {
    this.$http.get(UrlConstant.videoRecommendUrl).then((data) => {
      this.videoRecommends = data.body
    })
  }
}
</script>
<style scoped>
.home-video {
  margin-left: 50px;
  margin-top: 50px;
}

.video-col {
  margin: 20px 0;
}

.video-bottom {
  margin-top: 6px;
}

.video-text-row {
  margin-bottom: 5px;
}
</style>
