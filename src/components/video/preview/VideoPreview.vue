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
    <pagination
      v-bind:pageParam="pageParam"
      @handlePageSizeChange="handlePageSizeChange"
      @handleCurrentPageChange="handleCurrentPageChange"
      class="video-pagination"
    ></pagination>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

import Pagination from '../../common/Pagination'
import SingleVideoPreview from './SingleVideoPreview'

export default {
  components: {
    Pagination,
    SingleVideoPreview
  },
  data () {
    return {
      pageParam: {},
      videoList: [],
      videoBtnLoading: false
    }
  },
  created () {
    this.$http.get(UrlConstant.videosUrl).then((data) => {
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
    },
    handlePageSizeChange (pageSize, currentPage) {
      console.log(`1 每页 ${pageSize} 条, 第${currentPage}页`)
    },
    handleCurrentPageChange (pageSize, currentPage) {
      console.log(`2每页 ${pageSize} 条, 第${currentPage}页`)
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

.video-pagination {
  margin: 0 15% !important;
}
</style>
