<template>
  <div>
    <el-card :body-style="{ padding: '0px' }">
      <img
        class="image"
        src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
      />
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <router-link to="/video/123456789" class="view-video">观看视频</router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
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
