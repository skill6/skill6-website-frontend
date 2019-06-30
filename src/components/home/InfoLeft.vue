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
.current-date {
  margin-bottom: 10px;
}

.current-date-body {
  padding: 0 20px;
  margin: -15px 0;
}
</style>
