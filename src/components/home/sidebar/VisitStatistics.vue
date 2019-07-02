<template>
  <section>
    <Card style="width:200px">
      <p slot="title">
        <i class="el-icon-s-flag"></i> 访问统计
      </p>
      <ul>
        <li>
          当前在线
          <span>100</span>位
        </li>
        <li>
          最多同时在线
          <span>100</span>位
        </li>
        <li>
          今日访问数
          <span>100</span>位
        </li>
        <li>
          当月访问总计
          <span>100</span>位
        </li>
        <li>
          历史访问总计
          <span>100</span>位
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
ul > li > span {
  color: #084eec;
  font-family: 'Arial';
  display: inline-block;
  margin: 0 5px;
}
</style>
