<template>
  <div class="home-main">
    <!-- 第一层 -->
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
              <span>文件下载推荐</span>
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
      </el-row>
    </div>
    <div class="notice">
      <el-card shadow="hover">
        <Icon size="20" color="red" type="md-notifications-outline" />通知：技术流网站V1.0.0于2019年8月10日发布
      </el-card>
    </div>
    <!-- 第二层：轮播 -->
    <Divider />
    <div class="home-carousel">
      <el-row>
        <el-col :span="6" :offset="1">
          <el-card class="home-carousel-left" v-for="index in 2" v-bind:key="index">
            <a href="/">
              <el-image
                src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
                fit="fill"
              ></el-image>
            </a>
          </el-card>
        </el-col>
        <el-col :span="12">
          <div class="home-carousel-right">
            <el-carousel :interval="4000" type="card" height="400px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">轮播第{{item}}张</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 第三层：视频 -->
    <Divider />
    <div class="home-video">
      <div>
        <h2>视频推荐</h2>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="index in 12" :key="index" class="video-col">
          <el-card>
            <a href="/">
              <el-image
                src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
                fit="fill"
              ></el-image>
            </a>
            <div class="bottom clearfix">
              <router-link to="/video/123" class="view-video">观看视频</router-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import UrlConstant from '../../api/constant'

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
      }]
    }
  },
  created () {
    this.$http.get(UrlConstant.articleRecommendUrl).then((data) => {
      this.articleRecommends = data.body
    })
  }
}
</script>

<style scoped>
.home-main {
  width: 980px;
  margin: 0 auto;
}

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

.notice {
  clear: both;
  margin: 20px 30px;
}

/* 第二层 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home-carousel {
  margin-top: 20px;
}

.home-carousel-left {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.home-carousel-right {
  width: 660px;
}

/* 第三层 */
.home-video {
  margin-left: 50px;
  margin-top: 50px;
}

.video-col {
  margin: 20px 0;
}
</style>
