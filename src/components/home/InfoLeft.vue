<template>
  <div class="info-flow-side">
    <div class="ivu-card ivu-card-bordered current-date">
      <div id="currentDate" class="current-date-body"></div>
    </div>
    <visit-statistics></visit-statistics>
  </div>
</template>

<script>
import $ from 'jquery'

import VisitStatistics from './sidebar/VisitStatistics'

export default {
  name: 'InfoLeft',
  components: {
    VisitStatistics
  },
  mounted: function () {
    $('#currentDate').html('<embed wmode="transparent"' +
      'src="/static/clock.swf"' +
      'quality="high" bgcolor="#ffffff" width="160" height="80" align="middle"' +
      'allowscriptaccess="always" type="application/x-shockwave-flash"' +
      'pluginspage="http://www.macromedia.com/go/getflashplayer">')
  }
}
</script>
<style scoped>
.current-date {
  margin-bottom: 10px;
}

.current-date-body {
  padding: 0 20px;
  margin: -15px 0;
}
</style>
