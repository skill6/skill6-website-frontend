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
        <el-tag>Java</el-tag>
        <el-tag type="success">全栈</el-tag>
        <el-tag type="info">VUE</el-tag>
        <el-tag type="warning">深度学习</el-tag>
      </el-row>
      <el-row class="hot-label-row">
        <el-tag type="danger">VUE</el-tag>
        <el-tag>人工智能</el-tag>
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
import $ from 'jquery'

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
      const regular = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      if (navigator.userAgent.match(regular)) {
        return
      }

      $('#currentDate').html('<embed wmode="transparent"' +
        'src="/static/clock.swf"' +
        'quality="high" bgcolor="#ffffff" width="160" height="80" align="middle"' +
        'allowscriptaccess="always" type="application/x-shockwave-flash"' +
        'pluginspage="http://www.macromedia.com/go/getflashplayer">')
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
  width: 330px;
  background-color: whitesmoke;
  margin: 0 15px;
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
