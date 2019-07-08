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
            <div v-for="o in 4" :key="o" class="item">
              <div>
                <span>Java开发环境搭建</span>
                <span class="item-fr">10阅读/10点赞/10收藏</span>
              </div>
              <span class="item-fr">2019-07-09</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div slot="header">
              <span>提问答疑推荐</span>
            </div>
            <div v-for="o in 4" :key="o" class="item">
              <div>
                <span>如何搭建Java开发环境</span>
                <span class="item-fr">10阅读/10回答/10收藏</span>
              </div>
              <span class="item-fr">2019-07-09</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div slot="header">
              <span>文件下载推荐</span>
            </div>
            <div v-for="o in 4" :key="o" class="item">
              <div>
                <span>环境搭建文档</span>
                <span class="item-fr">10阅读/10点赞/10收藏/10下载</span>
              </div>
              <span class="item-fr">2019-07-09</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="notice">
      <el-card shadow="hover">
        <Icon size="20" color="red" type="md-notifications-outline" />通知：技术流网站V1.0.0与2019年8月10日发布
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
      <el-row :gutter="20">
        <el-col :span="5" v-for="index in 8" :key="index">
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
export default {
}
</script>

<style scoped>
.home-main {
  width: 1100px;
  margin-left: 20px;
}

.recommend {
  margin-right: 10px;
}

.item {
  margin-bottom: 25px;
}

.item-fr {
  float: right;
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
</style>
