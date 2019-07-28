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
      <div class="article-content">
        <div>{{article.articleSummary}}</div>
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
.article-preview {
  background-color: #f3f3f3;
  margin-bottom: 36px;
}

.article-actual {
  flex-direction: column;
  width: 100%;
  padding: 20px;
  color: #fff;
}

.article-header {
  display: flex;
  background-color: #f8f8f8;
}

.author-picture-show {
  margin-right: 15px;
}

.article-title {
  color: #212529;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.3px;
}

.article-description {
  font-size: 13px;
  letter-spacing: 0.2px;
  margin-top: 5px;
}

.article-detail {
  float: left;
  margin-right: 15px;
  color: #212529;
}

.article-content {
  margin-top: 15px;
  height: 100px;
  color: #2f2f2f;
}
</style>
