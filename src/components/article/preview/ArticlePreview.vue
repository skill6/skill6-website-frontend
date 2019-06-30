<template>
  <div class="info-flow-center">
    <div v-for="article in articles" :key="article.articleId">
      <single-article-preview v-bind:article="article"></single-article-preview>
    </div>
    <pagination
      v-bind:pageParam="pageParam"
      @handlePageSizeChange="handlePageSizeChange"
      @handleCurrentPageChange="handleCurrentPageChange"
    ></pagination>
  </div>
</template>

<script>
import Constant from '../../../modules/constant'
import Pagination from '../../common/Pagination'
import SingleArticlePreview from './SingleArticlePreview'

export default {
  name: 'ArticlePreview',
  data () {
    return {
      articles: [],
      pageParam: {}
    }
  },
  components: {
    SingleArticlePreview,
    Pagination
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
.info-flow-center {
  margin-left: 20%;
  margin-right: 30px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* min-width: 524px; */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-flex-grow: 1;
  z-index: 1;
  margin-bottom: 100px;
  width: 60%;
}
</style>
