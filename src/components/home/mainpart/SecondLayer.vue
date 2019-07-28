<template>
  <div class="notice">
    <el-card shadow="hover">
      <Icon size="24" color="red" :type="currentIcon" />
      通知：{{currentNotice}}
    </el-card>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

export default {
  data () {
    return {
      currentIndex: 0,
      notices: [{
        content: ''
      }],
      icons: ['md-notifications-outline', 'ios-volume-up', 'md-megaphone']
    }
  },
  created () {
    this.$http.get(UrlConstant.getNoticeUrl).then((data) => {
      this.notices = data.body
      // 设置通知定时转换
      this.noticeChangeTimer()
    })
  },
  computed: {
    currentNotice () {
      return this.notices[this.currentIndex].content
    },
    currentIcon () {
      return this.icons[this.currentIndex % this.icons.length]
    }
  },
  methods: {
    noticeChangeTimer () {
      setInterval(() => {
        this.currentIndex = ++this.currentIndex % this.notices.length
      }, 5000)
    }
  }
}
</script>

<style scoped>
.notice {
  clear: both;
  margin: 20px 30px;
}
</style>
