<template>
  <div>
    <el-card class="video-card">
      <el-image :src="video.videoPoster" class="video-image"></el-image>
      <div class="video-desc">
        <span>{{video.videoName}}</span>
        <div>
          <router-link :to="'/video/' + video.videoId" class="view-video">观看视频</router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style scoped>
.el-card__body {
  padding: 0;
}

.video-image {
  width: 100%;
  display: block;
  width: 360px;
  height: 300px;
}

.video-desc {
  padding: 15px;
}

.view-video {
  padding: 0;
  float: right;
  margin-bottom: 10px;
}
</style>
