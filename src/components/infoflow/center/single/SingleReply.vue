<template>
  <article class="article-preview">
    <div class="article-actual">
      <header class="article-header">
        <a href class="author-picture-show">
          <el-avatar :size="50" :src="latestReply.userHeadUrl" alt="这是头像"></el-avatar>
        </a>
        <div>
          <a class="author-title">{{latestReply.title}}</a>
          <div
            class="article-description"
          >发表于:{{latestReply.publishTime}} &nbsp;|&nbsp; 访问量:{{latestReply.visitCount}}</div>
        </div>
      </header>
      <div class="article-content">
        <div>{{latestReply.content}}</div>
      </div>
      <button class="article-read-more">阅读更多</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    latestReply: {
      type: Object
    }
  }
}
</script>

<style scoped>
</style>
