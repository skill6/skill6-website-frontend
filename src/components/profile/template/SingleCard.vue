<template>
  <div>
    <ul>
      <li class="item" v-for="o in 4" :key="o">
        <el-card class="box-card">
          <div class="card-title">
            <h3>如何准备面试</h3>
          </div>
          <div class="card-desc">
            <span>发表于5分钟前</span>
            <span>222浏览</span>
            <span>6评论</span>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.box-card {
  width: 600px;
}

.card-title {
  margin-bottom: 10px;
}

.item {
  margin-bottom: 20px;
}
</style>
