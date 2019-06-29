<template>
  <section>
    <Card style="width:200px">
      <p slot="title">
        <i class="el-icon-s-flag"></i> 访问统计
      </p>
      <ul>
        <li>
          <span>当前在线人数:</span>
          <span>100</span>
        </li>
        <li>
          <span>今日访问人数:</span>
          <span>100</span>
        </li>
        <li>
          <span>当月访问人数:</span>
          <span>100</span>
        </li>
        <li>
          <span>历史访问总人数:</span>
          <span>100</span>
        </li>
      </ul>
    </Card>
  </section>
</template>
<script>
export default {
  name: 'VisitStatistics'
}
</script>

<style scoped>
</style>
