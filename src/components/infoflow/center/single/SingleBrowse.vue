<template>
  <article class="article-preview">
    <div class="article-actual">
      <header class="article-header">
        <a href class="author-picture-show">
          <el-avatar :size="50" src="/static/logo/logo.jpg" alt="这是头像"></el-avatar>
        </a>
        <div>
          <a class="author-title">这是标题 - 最多访问</a>
          <div class="article-description">发表时间、浏览量</div>
        </div>
      </header>
      <div class="article-content">
        <div>这是文章内容</div>
      </div>
      <button class="article-read-more">阅读更多</button>
    </div>
  </article>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
