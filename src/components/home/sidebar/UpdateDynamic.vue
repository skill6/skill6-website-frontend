<template>
  <div class="update-dynamic">
    <Card>
      <p slot="title">
        <i class="el-icon-document"></i>博客文章更新
      </p>
      <ul>
        <li v-for="index in 5" v-bind:key="index" class="update-item">
          <a href>何明胜</a>发表了
          <a href>博文</a>
          <a href>《Java开发环境搭建》</a>
          <span class="publish-time">{{index}}分钟前</span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.update-dynamic {
  margin-top: 20px;
}

.publish-time {
  float: right;
  color: #ffac2d;
}

.update-item {
  font-size: 9px;
  margin-bottom: 30px;
}
</style>
