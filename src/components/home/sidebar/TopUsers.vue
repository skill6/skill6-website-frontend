<template>
  <div class="top-users">
    <Card>
      <p slot="title">
        <i class="el-icon-document"></i>访问量最多排行榜
      </p>
      <ul>
        <li v-for="index in 10" v-bind:key="index" class="update-item">
          <span>{{index}}.</span>
          <span>一格的程序人生</span>
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
.top-users {
  margin-top: 20px;
}
</style>
