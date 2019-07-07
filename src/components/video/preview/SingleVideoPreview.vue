<template>
  <div>
    <el-card :body-style="{ padding: '0px' }">
      <img class="image" :src="video.videoPoster" />
      <div style="padding: 14px;">
        <span>{{video.videoName}}</span>
        <div class="bottom clearfix">
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
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.view-video {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  width: 360px;
  height: 300px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
