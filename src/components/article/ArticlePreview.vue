<template>
  <div class="info-flow-center">
    <h1>文章</h1>
    <div v-for="user in users" :key="user.id">
      {{user.name}}
      <single-article-preview v-bind:user="user"></single-article-preview>
    </div>
  </div>
</template>

<script>
import SingleArticlePreview from './list/SingleArticlePreview'

export default {
  name: 'ArticlePreview',
  data () {
    return {
      users: []
    }
  },
  components: {
    SingleArticlePreview
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/users').then((data) => {
      this.users = data.body
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
  background-color: blue;
  z-index: 1;
  margin-bottom: 100px;
  width: 60%;
}
</style>
