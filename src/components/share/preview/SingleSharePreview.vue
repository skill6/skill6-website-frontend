<template>
  <section class="share-section">
    <!-- 左边头部 -->
    <header>
      <h2 class="share-title">
        <a>1. Java 编程思想</a>
        <el-tag effect="plain" size="mini">书籍</el-tag>
      </h2>
      <div class="share-author">
        <el-avatar
          :size="78"
          src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
          alt="这是头像"
        ></el-avatar>
        <p class="desc">何明胜 贡献</p>
      </div>
    </header>
    <div class="share-main">
      <div class="share-apraise">
        <span>
          <i class="el-icon-star-on"></i>
          <em>6921</em>次收藏
        </span>
        <span class="share-space">|</span>
        <span>
          <em>2019-06-30</em>上传
        </span>
      </div>
      <div class="share-resource">
        <span class="label">资源名称 ：</span>
        <span>Java编程思想.pdf</span>
      </div>
      <!-- 左边操作区 -->
      <div class="share-act">
        <el-button type="success" plain icon="el-icon-download" size="small">收藏</el-button>
        <el-button type="success" plain icon="el-icon-download" size="small">免费下载文件</el-button>
        <div class="share-property">
          <span>
            <i class="el-icon-view"></i>
            <em class="share-highlight">68018</em>
            <span>次浏览</span>
          </span>
          <span class="share-space">|</span>
          <span>
            <i class="el-icon-download"></i>
            <em class="share-highlight" show="downloadnum">2725</em>
            <span>次下载</span>
          </span>
        </div>
      </div>
    </div>
    <!-- 文件概述 -->
    <div>
      <p>本书赢得了全球程序员的广泛赞誉，即使是最晦涩的概念，在Bruce Eckel的文字亲和力和小而直接的编程示例面前也会化解于无形。从Java的基础语法到最高级特性（深入的面向对象概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握。</p>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.share-section {
  margin-top: 10px;
  position: relative;
  padding: 26px 30px 25px 143px;
  color: #555;
  font-size: 12px;
  min-height: 100px;
  background-color: #fff;
  border: 1px solid #ececec;
}

.share-title {
  font-size: 14px;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.share-title a {
  position: relative;
  z-index: 2;
  font-weight: 800;
  padding-right: 4px;
  color: #333;
}

.share-author {
  position: absolute;
  top: 30px;
  left: 33px;
  z-index: 101;
}

.share-author .desc {
  text-align: center;
  padding: 6px 0;
}

.share-main {
  position: relative;
  padding-bottom: 5px;
  min-height: 30px;
}

.share-apraise {
  padding-top: 10px;
  color: #999;
}

.share-apraise em {
  color: #2dbe64;
  padding-right: 5px;
}

.share-resource {
  padding-top: 6px;
  color: #999;
  overflow: hidden;
  margin: 5px 10px 10px 0;
  width: 60%;
}

.share-resource .label {
  float: left;
}

.share-act {
  position: absolute;
  right: 0;
  top: -30px;
  text-align: right;
}

.share-act .share-property {
  margin-top: 15px;
}

.share-highlight {
  color: #9e6b49;
  font-family: arial;
  font-weight: 800;
  font-style: normal;
}

.share-space {
  font-size: 12px;
  margin: 0 10px;
}
</style>
