<template>
  <div class="article-container">
    <section class="info-flow-center">
      <el-row>
        <el-col :span="3" :offset="19">
          <a target="_blank" href="/profile/publish/article">
            <el-button
              type="primary"
              plain
              icon="el-icon-edit"
              :loading="articleBtnLoading"
              @click="articleBtnClick"
            >我要发表博文</el-button>
          </a>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div v-for="article in articles" :key="article.articleId">
        <single-article-preview v-bind:article="article"></single-article-preview>
      </div>
      <pagination
        v-bind:pageParam="pageParam"
        @handlePageSizeChange="handlePageSizeChange"
        @handleCurrentPageChange="handleCurrentPageChange"
      ></pagination>
    </section>
    <!-- 右边栏 -->
    <right-side-bar></right-side-bar>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

import Pagination from '../../common/Pagination'
import SingleArticlePreview from './SingleArticlePreview'
import RightSideBar from '../../common/RightSideBar'

export default {
  components: {
    SingleArticlePreview,
    RightSideBar,
    Pagination
  },
  data () {
    return {
      articles: [],
      pageParam: {},
      articleBtnLoading: false
    }
  },
  created () {
    const articlesUrl = UrlConstant.getArticlesByPage(10, 1)
    this.$http.get(articlesUrl).then((data) => {
      console.log(data.body)
      this.articles = data.body.data
    })
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
    articleBtnClick () {
      this.articleBtnLoading = true
      setTimeout(() => {
        this.articleBtnLoading = false
      }, 500)
    }
  }
}
</script>

<style scoped>
.article-container {
  display: flex;
}

.info-flow-center {
  margin-left: 20%;
  margin-right: 20px;
  width: 60%;
  float: left;
}
</style>
