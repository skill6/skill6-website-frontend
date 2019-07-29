<template>
  <article class="article-preview">
    <div class="article-actual">
      <header class="article-header">
        <a href class="author-picture-show">
          <el-avatar :size="50" :src="latestUpdate.userHeadUrl" alt="这是头像"></el-avatar>
        </a>
        <div>
          <a class="author-title">{{latestUpdate.title}}</a>
          <div
            class="article-description"
          >发表于:{{latestUpdate.publishTime}} &nbsp;|&nbsp; 访问量:{{latestUpdate.visitCount}}</div>
        </div>
      </header>
      <div :class="showAll ? 'article-content ' : 'article-content hide-all' ">
        <div>{{latestUpdate.content}}</div>
      </div>
      <button class="article-read-more" @click="showAllContent">阅读更多</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    latestUpdate: {
      type: Object
    }
  },
  data () {
    return {
      showAll: false
    }
  },
  updated () {
    this.$emit('updateHeight')
  },
  methods: {
    showAllContent () {
      this.showAll = !this.showAll
    }
  }
}
</script>

<style scoped>
.hide-all {
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
