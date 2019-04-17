<template>
  <div class="info-flow-center">
    <h1>文章</h1>
    <div v-for="index in 10" :key="index">
      {{index}}
      <single-article-preview></single-article-preview>
    </div>
  </div>
</template>

<script>
import SingleArticlePreview from './list/SingleArticlePreview'

export default {
  name: 'ArticlePreview',
  components: {
    SingleArticlePreview
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
  background-color: blue;
  z-index: 1;
  margin-bottom: 100px;
  width: 60%;
}
</style>
