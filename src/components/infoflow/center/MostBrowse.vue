<template>
  <div>
    <div v-for="(mostBrowse, index) in mostBrowses" :key="index">
      <single-browse v-bind:mostBrowse="mostBrowse"></single-browse>
    </div>
    <div class="load-more">
      <Button long v-if="currentPage < totalPage" @click="loadMore" class="load-btn">点击加载更多</Button>
      <Button long v-else class="load-btn">没有更多了</Button>
    </div>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

import SingleBrowse from './single/SingleBrowse'

export default {
  components: {
    SingleBrowse
  },
  data () {
    return {
      mostBrowses: [],
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
      this.$http.get(UrlConstant.mostBrowseUrl).then((data) => {
        const mostBrowses = data.body.mostBrowses
        this.mostBrowses = mostBrowses.slice(0, this.currentCount)
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
