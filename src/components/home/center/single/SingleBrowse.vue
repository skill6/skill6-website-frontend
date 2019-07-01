<template>
  <article class="article-preview">
    <div class="article-actual">
      <header class="article-header">
        <a href class="author-picture-show">
          <img src="/static/logo/logo.jpg" alt="这是头像" class="author-picture">
        </a>
        <div>
          <a class="author-title">这是标题</a>
          <div class="article-description">发表时间、浏览量</div>
        </div>
      </header>
      <div class="article-body">
        <div class="article-content">这是文章内容</div>
        <button class="article-read-more">阅读更多</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SingleBrowse'
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

.article-read-more {
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin-top: 5px;
  box-sizing: border-box;
  background: none;
  border: 0;
  outline: none;
  background-color: #f3eeee;
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

.author-title {
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

.author-picture {
  height: 50px;
  width: 50px;
  border-radius: 50%;
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
