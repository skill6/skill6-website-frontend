<template>
  <section>
    <Card>
      <p slot="title">
        <i class="el-icon-s-flag"></i> 访问统计
      </p>
      <ul>
        <li>
          当前在线
          <span>{{visitStatistics.currentOnline}}</span>位
        </li>
        <li>
          最多同时在线
          <span>{{visitStatistics.mostOnline}}</span>位
        </li>
        <li>
          今日访问数
          <span>{{visitStatistics.visitToday}}</span>位
        </li>
        <li>
          当月访问总计
          <span>{{visitStatistics.monthlyVisits}}</span>位
        </li>
        <li>
          历史访问总计
          <span>{{visitStatistics.totalVisits}}</span>位
        </li>
      </ul>
    </Card>
  </section>
</template>
<script>
import UrlConstant from '../../../api/constant'

export default {
  data () {
    return {
      visitStatistics: {}
    }
  },
  created () {
    this.$http.get(UrlConstant.visitStatisticsUrl).then((data) => {
      this.visitStatistics = data.body
    })
  }
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
