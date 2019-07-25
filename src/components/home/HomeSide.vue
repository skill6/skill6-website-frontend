<template>
  <div class="info-side">
    <!-- 人体时间 -->
    <div class="ivu-card ivu-card-bordered side-section current-date">
      <div id="currentDate" class="current-date-body"></div>
    </div>
    <!-- 访问统计 -->
    <visit-statistics class="side-section"></visit-statistics>
    <!-- 热门标签 -->
    <hot-label class="side-section"></hot-label>
    <!-- 农历日历 -->
    <lunar-calendar class="side-section"></lunar-calendar>
    <!-- 更新动态 -->
    <update-dynamic class="side-section"></update-dynamic>
    <!-- 活跃用户 -->
    <active-users class="side-section"></active-users>
    <!-- top n 用户 -->
    <top-users class="side-section"></top-users>
  </div>
</template>

<script>
import Util from '../../lib/util'

import LunarCalendar from './sidebar/LunarCalendar'
import VisitStatistics from './sidebar/VisitStatistics'
import HotLabel from './sidebar/HotLabel'
import UpdateDynamic from './sidebar/UpdateDynamic'
import ActiveUsers from './sidebar/ActiveUsers'
import TopUsers from './sidebar/TopUsers'

export default {
  components: {
    LunarCalendar,
    VisitStatistics,
    HotLabel,
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

.side-section {
  margin: 10px;
  background-color: white;
  padding: 5px;
}

.current-date {
  margin-bottom: 10px;
}

.current-date-body {
  padding: 0 20px;
  margin: -15px 0;
}
</style>
