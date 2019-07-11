<template>
  <div class="article-preview">
    <section class="info-flow-center">
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
import Constant from '../../../api/constant'
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
      pageParam: {}
    }
  },
  created () {
    this.$http.get(Constant.articlesUrl).then((data) => {
      this.articles = data.body.articles
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
    }
  }
}
</script>

<style scoped>
.article-preview {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-grow: 1;
  margin-bottom: 100px;
}

.info-flow-center {
  margin-left: 20%;
  margin-right: 20px;
  width: 60%;
  float: left;
}
</style>
