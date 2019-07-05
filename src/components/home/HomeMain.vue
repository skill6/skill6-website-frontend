<template>
  <div class="home-main">
    <div>
      <Card class="article-update">
        <p slot="title">
          <i class="el-icon-document"></i>博客文章更新
        </p>
        <ul>
          <li v-for="index in 5" v-bind:key="index">
            <a href class="article-mr">何明胜</a>发表了
            <a href class="article-mr">博文</a>
            <a href class="article-mr">《Java开发环境搭建》</a>
            <span class="publish-time">{{index}}分钟前</span>
          </li>
        </ul>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.home-main {
  width: 56%;
  margin-left: 20px;
}

.article-update {
  width: 400px;
}

.article-mr {
  margin-right: 5px;
}

.publish-time {
  float: right;
  color: #ffac2d;
}
</style>
