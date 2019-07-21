<template>
  <section class="share-section">
    <aside>
      <a target="_blank" href="/share/view/67e2a1c7aa00b52acfc7ca28"></a>
    </aside>
    <header class="hd g-clearfix">
      <h2 class="title">
        <a>1. Java 编程思想</a>
        <el-tag effect="plain" size="mini">书籍</el-tag>
      </h2>
      <div class="author g-person">
        <a target="_blank" href="/user/" class="g-userhead g-userhead-lg trigger">
          <img
            src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
            alt
          />
        </a>
        <p class="descr">何明胜 贡献</p>
      </div>
    </header>
    <div class="bd">
      <div class="apraise">
        <span>
          <i class="el-icon-star-on"></i>
          <em>6921</em>次收藏
        </span>
        <span class="g-space">|</span>
        <span>
          <em>2019-06-30</em>上传
        </span>
      </div>
      <div class="resource g-clearfix">
        <span class="label">资源名称 ：</span>
        <span class="content">
          <span class="text">Java编程思想.pdf</span>
        </span>
      </div>
      <div class="act">
        <el-button type="success" plain icon="el-icon-download" size="small">收藏</el-button>
        <el-button type="success" plain icon="el-icon-download" size="small">免费下载文件</el-button>
        <div class="property">
          <span class="g-ico g-ico-gray g-ico-gray-view">
            <i class="el-icon-view"></i>
            <em class="g-highlight">68018</em>
            <span>次浏览</span>
          </span>
          <span class="g-space">|</span>
          <span class="g-ico g-ico-gray">
            <i class="el-icon-download"></i>
            <em class="g-highlight" show="downloadnum">2725</em>
            <span>次下载</span>
          </span>
        </div>
      </div>
    </div>
    <footer>
      <p
        class="text g-clearfix"
      >本书赢得了全球程序员的广泛赞誉，即使是最晦涩的概念，在Bruce Eckel的文字亲和力和小而直接的编程示例面前也会化解于无形。从Java的基础语法到最高级特性（深入的面向对象概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握。</p>
    </footer>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
section .share-section {
  margin-top: 10px;
  position: relative;
  padding: 26px 30px 25px 143px;
  color: #555;
  font-size: 12px;
  min-height: 100px;
  background-color: #fff;
  border: 1px solid #ececec;
}

.title {
  font-size: 14px;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title a {
  position: relative;
  z-index: 2;
  font-weight: 800;
  padding-right: 4px;
}

.share-section a {
  color: #333;
  z-index: 2;
}

.author {
  position: absolute;
  top: 30px;
  left: 33px;
  z-index: 101;
}

.g-userhead-lg,
.g-userhead-lg img {
  width: 78px;
  height: 78px;
}

.g-userhead {
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  border-radius: 60px;
}

.author .descr {
  text-align: center;
  padding: 3px 0;
  color: #555;
  width: 100px;
  height: 18px;
  overflow: hidden;
}

.bd {
  padding-right: 100px;
  position: relative;
  padding-bottom: 5px;
  min-height: 29px;
}

.apraise {
  padding-top: 8px;
  color: #999;
}

.apraise em {
  color: #2dbe64;
  padding-right: 5px;
}

.resource {
  padding-top: 6px;
  color: #999;
  overflow: hidden;
  margin: 5px 10px 10px 0;
}

.resource .label {
  float: left;
}

.resource .content {
  overflow: hidden;
  display: block;
}

.resource a {
  position: relative;
  display: inline-block;
  margin-bottom: 3px;
  height: 18px;
  overflow: hidden;
}

.act {
  position: absolute;
  right: 20px;
  top: -25px;
  text-align: right;
}

.g-ico {
  display: inline-block;
  line-height: 1.5;
  vertical-align: middle;
  background-repeat: no-repeat;
}

.act .hint {
  display: none;
  position: absolute;
  top: -44px;
  left: -18px;
  padding: 7px;
  background: #2dbe60;
  color: #fff;
  border-radius: 3px;
  width: 86px;
}

.g-btn-succ {
  background-color: #2dbe60;
  color: #fff;
  border: 1px solid #2dbe60;
}

.act .property {
  margin-top: 19px;
}

.g-ico-gray-view {
  padding-left: 24px;
  background-position: 0 -45px;
}

.act .g-ico em {
  font-size: 14px;
  margin: 0 2px;
}

.g-highlight {
  color: #9e6b49;
  font-family: arial;
  font-weight: 800;
  font-style: normal;
}

.g-space {
  color: #d4d4d4;
  font-size: 12px;
  margin: 0 10px;
}
</style>
