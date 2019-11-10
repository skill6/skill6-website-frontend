<template>
  <article class="article-main">
    <div class="article">
      <h1 class="article-title">{{article.articleTitle}}</h1>
      <!-- 作者区域 -->
      <div class="article-author">
        <a class="article-avatar" :href="article.userHomeUrl">
          <el-avatar :size="50" :src="article.userHeadUrl" alt="头像"></el-avatar>
        </a>
        <div class="article-info">
          <div>
            <span class="author-name">
              <a href>{{article.articleAuthor}}</a>
            </span>
            <!-- 关注用户按钮 -->
            <a class="btn btn-success article-follow">
              <span>关注</span>
            </a>
            <span class="read-info">阅读本文需要约1分钟</span>
          </div>
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
        <div class="article-content-free">{{article.articleMdContent}}</div>
      </div>
      <!-- 参考资料列表 -->
      <div>
        <el-divider></el-divider>
        <el-card class="box-card">
          <div slot="header">
            <span>参考资料</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            <el-link href="/article/123456789" target="_blank">搭建开发环境</el-link>
          </div>
        </el-card>
      </div>
      <!-- 底部功能区 -->
      <bottom-bar></bottom-bar>
      <!-- 评论 -->
      <comment :comments="commentData" @updateComment="updateComment"></comment>
    </div>
  </article>
</template>

<script>
import UrlConstant from '../../api/constant'

import Comment from './comment/Comment'
import BottomBar from '../common/BottomBar'

export default {
  components: {
    Comment,
    BottomBar
  },
  data () {
    return {
      article: {},
      commentData: []
    }
  },
  created () {
    const articleId = this.$route.params.articleId

    const articleUrl = UrlConstant.getArticlesById(articleId)
    this.$http.get(articleUrl).then((data) => {
      this.article = data.body
    })

    const commentUrl = UrlConstant.getCommentUrlByArticleId(articleId, 10, 1)
    this.$http.get(commentUrl).then((data) => {
      this.commentData = data.body.data
    })
  },
  methods: {
    updateComment (inputComment) {
      const commentUrl = UrlConstant.getCommentUrlByArticleId(this.article.articleId, 10, 1)
      this.$http.get(commentUrl).then((data) => {
        this.commentData = data.body.data
      })
    }
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
  font-size: 30px;
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

.article-info {
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
}

.author-name {
  margin-right: 3px;
  font-size: 18px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}

.read-info {
  margin-left: 25px;
}

.box-card {
  width: 480px;
}
</style>
