<template>
  <div>
    <section id="bd">
      <div class="container">
        <!-- 左边菜单 -->
        <side-menu></side-menu>
        <!-- 右边主体部分 -->
        <section class="g-main">
          <!-- 头部 -->
          <section id="lessonfocus" class="mod g-section">
            <footer class="ft">
              <a
                target="_blank"
                href="/upload"
                act="upload"
                class="g-btn g-btn-lg g-btn-warn log-xsend"
                data-logxsend="[16,500001,{index:1}]"
              >
                <span class="g-ico g-ico-tools g-ico-tools-upload">
                  <i data-v-1bece2d4 class="el-icon-upload2"></i>
                </span>我要分享文件
              </a>
            </footer>
          </section>
          <!-- 主体 -->
          <section id="cardlist" class="mod g-cardlist">
            <!-- 单个下载 -->
            <div>
              <div v-for="question in 10" :key="question">
                <single-share-preview></single-share-preview>
              </div>
            </div>
            <!-- 分页 -->
            <div class="g-page">
              <span class="cur no1">1</span>
              <a href="/share/list?page=1" class="no1">2</a>
              <a href="/share/list?page=1" class="no1">3</a>
              <a href="/share/list?page=1" class="no1">4</a>
              <a href="/share/list?page=1" class="no1">5</a>
              <a href="/share/list?page=1" class="next">下一页&gt;</a>
            </div>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import SingleSharePreview from './SingleSharePreview'

export default {
  name: 'SharePreview',
  components: {
    SideMenu,
    SingleSharePreview
  }
}
</script>

<style scoped>
.container {
  width: 1366px;
  margin: 0 auto;
}

.g-main {
  width: 900px;
  float: right;
  position: relative;
}

#lessonfocus {
  position: relative;
  padding-left: 26px;
  padding-top: 22px;
  padding-bottom: 22px;
  margin: 0;
  padding-right: 28px;
  color: #555;
}

.ft {
  position: absolute;
  right: 25px;
  top: 5px;
  text-align: right;
}

#lessonfocus .ft .g-btn-lg {
  padding: 7px 10px;
  font-size: 14px;
}

.g-btn-lg {
  padding: 0 12px;
  line-height: 2.5;
}

.g-btn-warn {
  background-color: #fe7545;
  color: #fff;
  border: 1px solid #fe7545;
}

.g-ico-tools-upload {
  line-height: 1.5;
  font-size: 18px;
  height: 20px;
  background-position: 0 -396px;
  cursor: pointer;
  padding-right: 5px;
  margin-top: 12px;
}

.g-ico {
  display: inline-block;
  display: inline;
  zoom: 1;
  line-height: 1.5;
  vertical-align: middle;
  background-repeat: no-repeat;
}

.g-cardlist section.g-section {
  margin-top: 10px;
  position: relative;
  padding: 26px 30px 25px 143px;
  color: #555;
  font-size: 12px;
  min-height: 100px;
}

.g-section {
  background-color: #fff;
  border: 1px solid #ececec;
  padding: 18px 20px;
  margin-top: 10px;
}

/* 分页 */
.g-page {
  padding: 20px 0;
  font-family: arial;
  text-align: center;
}

.g-page .cur {
  color: #2dbe64;
}
.g-page a,
.g-page .cur {
  font-size: 16px;
  vertical-align: top;
  margin-right: 5px;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  height: 28px;
  line-height: 29px;
  overflow: hidden;
  padding: 0 10px;
  border-radius: 2px;
}

.g-cardlist a {
  color: #333;
  z-index: 2;
}
.g-page a,
.g-page .cur {
  font-size: 16px;
  vertical-align: top;
  margin-right: 5px;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  height: 28px;
  line-height: 29px;
  overflow: hidden;
  padding: 0 10px;
  border-radius: 2px;
}
</style>
