<template>
  <div>
    <div v-for="(latestUpdate, index) in latestUpdates" :key="index">
      <single-update v-bind:latestUpdate="latestUpdate"></single-update>
    </div>
    <div class="load-more">
      <Button long v-if="currentPage < totalPage" @click="loadMore" class="load-btn">点击加载更多</Button>
      <Button long v-else class="load-btn">没有更多了</Button>
    </div>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

import SingleUpdate from './single/SingleUpdate'

export default {
  components: {
    SingleUpdate
  },
  data () {
    return {
      latestUpdates: [],
      currentCount: 2,
      currentPage: 1,
      totalPage: 5,
      pageSize: 2
    }
  },
  created () {
    this.queryByPage()
  },
  methods: {
    loadMore () {
      this.$Loading.start()
      this.currentCount += this.pageSize
      this.currentPage += 1

      this.queryByPage()
      this.$emit('changeHeight', this.currentCount)
      this.$Loading.finish()
    },
    queryByPage () {
      this.$http.get(UrlConstant.latestUpdateUrl).then((data) => {
        const latestUpdates = data.body.latestUpdates
        this.latestUpdates = latestUpdates.slice(0, this.currentCount)
      })
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
