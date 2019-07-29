<template>
  <section class="share-section">
    <!-- 左边头部 -->
    <header>
      <h2 class="share-title">
        <a>{{file.fileName}}</a>
        <el-tag effect="plain" size="mini">{{file.fileLabel}}</el-tag>
      </h2>
      <div class="share-author">
        <el-avatar :size="78" :src="file.userHeadUrl" alt="这是头像"></el-avatar>
        <p class="desc">{{file.fileAuthor}} 贡献</p>
      </div>
    </header>
    <div class="share-main">
      <div class="share-apraise">
        <span>
          <i class="el-icon-star-on"></i>
          <em>{{file.fileCollectCount}}</em>次收藏
        </span>
        <span class="share-space">|</span>
        <span>
          <em>{{file.fileUploadTime}}</em>上传
        </span>
      </div>
      <div class="share-resource">
        <span class="label">资源名称 ：</span>
        <span>{{file.fileCompleteName}}</span>
      </div>
      <!-- 左边操作区 -->
      <div class="share-act">
        <el-button type="success" plain icon="el-icon-download" size="small">收藏</el-button>
        <el-button type="success" plain icon="el-icon-download" size="small">免费下载文件</el-button>
        <div class="share-property">
          <span>
            <i class="el-icon-view"></i>
            <em class="share-highlight">{{file.fileVisitCount}}</em>
            <span>次浏览</span>
          </span>
          <span class="share-space">|</span>
          <span>
            <i class="el-icon-download"></i>
            <em class="share-highlight" show="downloadnum">{{file.fileDownlaodCount}}</em>
            <span>次下载</span>
          </span>
        </div>
      </div>
    </div>
    <!-- 文件概述 -->
    <div>
      <p>{{file.fileDesc}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    file: {
      type: Object
    }
  }
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
