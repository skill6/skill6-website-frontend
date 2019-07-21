<template>
  <div class="info-side">
    <!-- 人体时间 -->
    <div class="ivu-card ivu-card-bordered current-date">
      <div id="currentDate" class="current-date-body"></div>
    </div>
    <!-- 访问统计 -->
    <visit-statistics></visit-statistics>
    <!-- 热门标签 -->
    <div class="hot-label">
      <el-row class="hot-label-row">
        <el-tag size="small">Java</el-tag>
        <el-tag type="success" size="small">全栈</el-tag>
        <el-tag type="info" size="small">VUE</el-tag>
        <el-tag type="warning" size="small">深度学习</el-tag>
      </el-row>
      <el-row class="hot-label-row">
        <el-tag type="danger" size="small">VUE</el-tag>
        <el-tag size="small">人工智能</el-tag>
      </el-row>
    </div>
    <!-- 农历日历 -->
    <lunar-calendar></lunar-calendar>
    <!-- 更新动态 -->
    <update-dynamic></update-dynamic>
    <!-- 活跃用户 -->
    <active-users></active-users>
    <!-- top n 用户 -->
    <top-users></top-users>
  </div>
</template>

<script>
import Util from '../../lib/util'

import LunarCalendar from './sidebar/LunarCalendar'
import VisitStatistics from './sidebar/VisitStatistics'
import UpdateDynamic from './sidebar/UpdateDynamic'
import ActiveUsers from './sidebar/ActiveUsers'
import TopUsers from './sidebar/TopUsers'

export default {
  components: {
    LunarCalendar,
    VisitStatistics,
    UpdateDynamic,
    ActiveUsers,
    TopUsers
  },
  methods: {
    loadDatePlugin: function () {
      if (Util.isMobilePhone()) {
        return
      }

      document.getElementById('currentDate').innerHTML =
        '<embed wmode="transparent" src="/static/clock.swf" quality="high" bgcolor="#ffffff" width="160"' +
        'height="80" align="middle" allowscriptaccess="always" type="application/x-shockwave-flash"' +
        'pluginspage="http://www.macromedia.com/go/getflashplayer">'
    }
  },
  mounted: function () {
    this.loadDatePlugin()
  }
}
</script>

<style scoped>
.info-side {
  position: relative;
  display: block;
  width: 320px;
  background-color: whitesmoke;
  margin: 0 20px 0 25px;
}

.current-date {
  margin-bottom: 10px;
}

.current-date-body {
  padding: 0 20px;
  margin: -15px 0;
}

.hot-label {
  margin: 10px;
  background-color: white;
  padding: 5px;
}

.hot-label-row {
  margin-bottom: 10px;
}
</style>
