<template>
  <section class="share-container">
    <div>
      <!-- 左边菜单 -->
      <side-menu></side-menu>
      <!-- 右边主体部分 -->
      <section class="share-main">
        <!-- 头部 -->
        <section id="lessonfocus" class="mod g-section">
          <footer class="ft">
            <a target="_blank" href="/profile/upload/file">
              <el-button
                type="primary"
                plain
                icon="el-icon-upload2"
                :loading="shareBtnLoading"
                @click="shareBtnClick"
              >我要分享文件</el-button>
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
  components: {
    SideMenu,
    Pagination,
    SingleSharePreview
  },
  data () {
    return {
      pageParam: {},
      shareBtnLoading: false
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
    },
    shareBtnClick () {
      this.shareBtnLoading = true
      setTimeout(() => {
        this.shareBtnLoading = false
      }, 500)
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

.share-main {
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
</style>
