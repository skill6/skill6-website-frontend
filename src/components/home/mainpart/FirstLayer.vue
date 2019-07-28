<template>
  <div class="recommend">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>博客文章推荐</span>
          </div>
          <div
            v-for="articleRecommend in articleRecommends"
            :key="articleRecommend.id"
            class="item"
          >
            <el-row :gutter="8">
              <el-col
                :span="10"
                class="recommend-ellipsis"
                :title="articleRecommend.title"
              >{{articleRecommend.title}}</el-col>
              <el-col
                :span="8"
                class="recommend-ellipsis"
                :title="articleRecommend.readCount + '阅读/' + articleRecommend.thumbUp + '点赞/' + articleRecommend.collection + '收藏'"
              >{{articleRecommend.readCount}}阅读/{{articleRecommend.thumbUp}}点赞/{{articleRecommend.collection}}收藏</el-col>
              <el-col
                :span="6"
                class="recommend-ellipsis"
                :title="articleRecommend.publishDate"
              >{{articleRecommend.publishDate}}</el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>提问答疑推荐</span>
          </div>
          <div
            v-for="questionRecommend in questionRecommends"
            :key="questionRecommend.id"
            class="item"
          >
            <el-row :gutter="8">
              <el-col
                :span="10"
                class="recommend-ellipsis"
                :title="questionRecommend.title"
              >{{questionRecommend.title}}</el-col>
              <el-col
                :span="8"
                class="recommend-ellipsis"
                :title="questionRecommend.readCount + '阅读/' + questionRecommend.thumbUp + '点赞/' + questionRecommend.collection + '收藏'"
              >{{questionRecommend.readCount}}阅读/{{questionRecommend.thumbUp}}点赞/{{questionRecommend.collection}}收藏</el-col>
              <el-col
                :span="6"
                class="recommend-ellipsis"
                :title="questionRecommend.publishDate"
              >{{questionRecommend.publishDate}}</el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>文件下载推荐</span>
          </div>
          <div v-for="videoRecommend in videoRecommends" :key="videoRecommend.id" class="item">
            <el-row :gutter="8">
              <el-col
                :span="10"
                class="recommend-ellipsis"
                :title="videoRecommend.title"
              >{{videoRecommend.title}}</el-col>
              <el-col
                :span="8"
                class="recommend-ellipsis"
                :title="videoRecommend.readCount + '阅读/' + videoRecommend.thumbUp + '点赞/' + videoRecommend.collection + '收藏'"
              >{{videoRecommend.readCount}}阅读/{{videoRecommend.thumbUp}}点赞/{{videoRecommend.collection}}收藏</el-col>
              <el-col
                :span="6"
                class="recommend-ellipsis"
                :title="videoRecommend.publishDate"
              >{{videoRecommend.publishDate}}</el-col>
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
      articleRecommends: [{
        id: 1,
        title: '',
        readCount: 0,
        thumbUp: 0,
        collection: 0,
        publishDate: ''
      }],
      questionRecommends: [{
        id: 1,
        title: '',
        readCount: 0,
        thumbUp: 0,
        collection: 0,
        publishDate: ''
      }],
      videoRecommends: [{
        id: 1,
        title: '',
        readCount: 0,
        thumbUp: 0,
        collection: 0,
        publishDate: ''
      }]
    }
  },
  created () {
    this.$http.get(UrlConstant.articleRecommendUrl).then((data) => {
      this.articleRecommends = data.body
    })
    this.$http.get(UrlConstant.questionRecommendUrl).then((data) => {
      this.questionRecommends = data.body
    })
    this.$http.get(UrlConstant.downloadRecommendUrl).then((data) => {
      this.videoRecommends = data.body
    })
  }
}
</script>

<style scoped>
.recommend {
  margin-right: 10px;
}

.item {
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 10px;
}

.recommend-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
