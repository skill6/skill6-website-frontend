<template>
  <div class="info-flow-center">
    <div v-for="article in articles" :key="article.articleId">
      <single-article-preview v-bind:article="article"></single-article-preview>
    </div>
  </div>
</template>

<script>
import SingleArticlePreview from './SingleArticlePreview'
import Constant from '../../../modules/constant'

export default {
  name: 'ArticlePreview',
  data () {
    return {
      articles: []
    }
  },
  components: {
    SingleArticlePreview
  },
  created () {
    this.$http.get(Constant.articlesUrl).then((data) => {
      this.articles = data.body.articles
    })
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
