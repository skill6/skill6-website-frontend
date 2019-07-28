<template>
  <article class="article-preview">
    <div class="article-actual">
      <header class="article-header">
        <div>
          <a href class="author-picture-show">
            <el-avatar :size="50" :src="article.userHeadUrl" alt="这是头像"></el-avatar>
          </a>
        </div>
        <div>
          <router-link to="/article/123456789" class="article-title">{{article.articleTitle}}</router-link>
          <div class="article-description">
            <div class="article-detail">作者: {{article.articleAuthor}}</div>
            <div class="article-detail">发表时间: {{article.articleCreateTime}}</div>
            <div class="article-detail">浏览量: {{article.articleReadTotal}}</div>
          </div>
        </div>
      </header>
      <div class="article-body">
        <div class="article-content">{{article.articleSummary}}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
}

</script>

<style scoped>
.article-content {
  margin-top: 17px;
  position: relative;
  overflow: hidden;
  height: 100px;
  color: #2f2f2f;
}

.article-description {
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  -webkit-font-smoothing: antialiased;
  margin-top: 3px;
}

.article-detail {
  float: left;
  margin-right: 15px;
  color: #212529;
}

.article-title {
  color: #212529;
  text-decoration: none;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.3px;
  -webkit-font-smoothing: antialiased;
}

.author-picture-show {
  height: 50px;
  margin-right: 15px;
}

.article-body {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
}

.article-header {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  background: transparent;
  border: 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  background-color: #f8f8f8;
}

.article-actual {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 21px;
  color: #fff;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
}

.article-preview {
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 0;
  box-shadow: 0 1px 0 0 #e1e1e1;
  background-color: #f3f3f3;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  margin-bottom: 17px;
}
</style>
