<template>
  <div id="latestReply">
    <div v-for="(latestReply, index) in latestReplys" :key="index">
      <single-reply v-bind:latestReply="latestReply" v-on:updateHeight="updateHeight"></single-reply>
    </div>
    <div class="load-more">
      <Button long v-if="currentPage < totalPage" @click="loadMore" class="load-btn">点击加载更多</Button>
      <Button long v-else class="load-btn">没有更多了</Button>
    </div>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

import SingleReply from './single/SingleReply'

export default {
  components: {
    SingleReply
  },
  data () {
    return {
      latestReplys: [],
      currentCount: 2,
      currentPage: 1,
      totalPage: 5,
      pageSize: 2
    }
  },
  created () {
    this.queryByPage()
  },
  updated () {
    this.updateHeight()
  },
  methods: {
    loadMore () {
      this.$Loading.start()
      this.currentCount += this.pageSize
      this.currentPage += 1

      this.queryByPage()
      this.$Loading.finish()
    },
    queryByPage () {
      this.$http.get(UrlConstant.latestReplyUrl).then((data) => {
        const latestReplys = data.body.latestReplys
        this.latestReplys = latestReplys.slice(0, this.currentCount)
      })
    },
    updateHeight () {
      const currentHeight = document.getElementById('latestReply').offsetHeight
      this.$emit('changeHeight', currentHeight)
    }
  }
}
</script>

<style scoped>
.load-more {
  width: 98%;
  margin: 10px auto;
}

.load-btn {
  font-size: 15px;
  font-weight: 600;
}
</style>
