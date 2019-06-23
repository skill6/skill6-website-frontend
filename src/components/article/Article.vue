<template>
  <article class="article-main">
    <div class="article">
      <h1 class="article-title">{{article.articleTitle}}</h1>

      <!-- 作者区域 -->
      <div class="article-author">
        <a class="article-avatar" :href="article.userHomeUrl">
          <img
            :src="article.userHeadUrl"
            alt="头像"
          >
        </a>
        <div class="article-info">
          <span class="author-name">
            <a href="/u/4c41bdfecd3b">{{article.articleAuthor}}</a>
          </span>
          <!-- 关注用户按钮 -->
          <a class="btn btn-success article-follow">
            <span>关注</span>
          </a>
          <!-- 文章数据信息 -->
          <div class="article-meta">
            <!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间 -->
            <span class="publish-time article-meta-pr">{{article.articleCreateTime}}</span>
            <span class="wordage article-meta-pr">字数{{article.articleWordsCount}}</span>
            <span class="views-count article-meta-pr">阅读{{article.articleReadTotal}}</span>
            <span class="comments-count article-meta-pr">评论{{article.articleCommentsCount}}</span>
            <span class="likes-count article-meta-pr">喜欢{{article.articleLikeCount}}</span>
          </div>
        </div>
      </div>

      <!-- 文章内容 -->
      <div data-note-content class="article-content">
        <div class="article-content-free">
         {{article.articleMdContent}}
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Constant from '../../modules/constant'

export default {
  name: 'Article',
  data () {
    return {
      article: []
    }
  },
  created () {
    this.$http.get(Constant.articleUrl).then((data) => {
      this.article = data.body
    })
  }
}
</script>

<style scoped>
.article-main {
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 720px;
}

.article-title {
  word-break: break-word !important;
  word-break: break-all;
  margin: 20px 0 0;
  font-family: -apple-system, SF UI Display, Arial, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
}

.article-author {
  margin: 30px 0 40px;
}

.article-avatar {
  width: 48px;
  height: 48px;
  vertical-align: middle;
  display: inline-block;
}

.article-avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}

.article-info {
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
}

.author-name {
  margin-right: 3px;
  font-size: 16px;
  vertical-align: middle;
}

.author-name a {
  color: #333;
}

.article-follow {
  padding: 0 7px 0 5px;
  font-size: 12px;
}

.article-follow span {
  color: #fff;
}

.article-meta {
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
}

.article-meta-pr {
  padding-right: 5px;
}

.article-content {
  color: #2f2f2f;
  word-break: break-word !important;
  word-break: break-all;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}
</style>
