<template>
  <div id="app">
    <div class="container">
      <skill6-menu></skill6-menu>
    </div>
    <div class="body-main">
      <section class="info-flow-side">

        左边
      </section>
      <section class="info-flow-center">
        <article-preview></article-preview>
        <article-preview></article-preview>
        <article-preview></article-preview>
        <article-preview></article-preview>
      </section>
      <section class="info-flow-side">
      </section>
    </div>
  </div>
</template>

<script>

  import Menu from './components/navigation/Menu'
  import ArticlePreview from './components/home/ArticlePreview'

  export default {
    components: {
      'skill6-menu': Menu,
      ArticlePreview
    }
  }
</script>

<style scoped>

  .body-main {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
  }

  .info-flow-side {
    position: relative;
    display: block;
    width: 25%;
    background-color: crimson;
    z-index: 0;
  }

  .info-flow-center {
    margin-left: 30px;
    margin-right: 30px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 524px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -webkit-flex-grow: 1;
    background-color: blue;
    z-index: 1;
  }


</style>
