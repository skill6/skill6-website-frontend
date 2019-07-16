<template>
  <div class="profile-side">
    <div>
      <Card>
        <p slot="title">
          <i class="el-icon-s-flag"></i> 个人分类
        </p>
        <ul>
          <li>Java</li>
          <li>Mysql</li>
          <li>Python</li>
          <li>前端</li>
          <li>人工智能</li>
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
.profile-side {
  margin-left: 20px;
}

li,
ul {
  list-style: none;
  text-transform: capitalize;
}
</style>
