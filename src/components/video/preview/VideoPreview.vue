<template>
  <div class="video-main">
    <el-row>
      <el-col :span="3" :offset="20" class="video-top-col">
        <a target="_blank" href="/profile/upload/video">
          <el-button
            type="primary"
            plain
            icon="el-icon-upload2"
            :loading="videoBtnLoading"
            @click="uploadBtnClick"
          >我要上传视频</el-button>
        </a>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="30">
      <el-col :span="6" v-for="(video, index) in videoList" :key="index">
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
      videoList: [],
      videoBtnLoading: false
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
  },
  methods: {
    uploadBtnClick () {
      this.videoBtnLoading = true
      setTimeout(() => {
        this.videoBtnLoading = false
      }, 500)
    }
  }
}
</script>

<style scoped>
.video-main {
  margin: 0 10%;
}

.video-top-col {
  margin-bottom: 0 !important;
}

.el-col {
  margin-bottom: 40px;
}
</style>
