<template>
  <section class="share-container">
    <div>
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
          <pagination
            v-bind:pageParam="pageParam"
            @handlePageSizeChange="handlePageSizeChange"
            @handleCurrentPageChange="handleCurrentPageChange"
          ></pagination>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import SideMenu from './SideMenu'
import Pagination from '../../common/Pagination'
import SingleSharePreview from './SingleSharePreview'

export default {
  name: 'SharePreview',
  components: {
    SideMenu,
    Pagination,
    SingleSharePreview
  },
  data () {
    return {
      pageParam: {}
    }
  },
  created () {
    this.pageParam = {
      pageSize: 10,
      currentPage: 1,
      totalCount: 1000
    }
  },
  methods: {
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
.share-container {
  overflow: auto;
  width: 1366px;
  margin: 0 auto;
  max-width: 1140px;
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
</style>
